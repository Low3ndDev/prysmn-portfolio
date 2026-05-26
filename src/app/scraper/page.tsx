"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Download,
  Trash2,
  Star,
  ExternalLink,
  Phone,
  MapPin,
  Globe,
  Loader2,
  ChevronDown,
  AlertCircle,
  RefreshCw,
  Filter,
} from "lucide-react";
import { toast } from "sonner";

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export interface LeadRecord {
  id: string;
  place_id: string;
  name: string;
  address: string;
  rating: number | null;
  user_ratings_total: number;
  website: string | null;
  phone: string | null;
  types: string[];
  status: "to_audit" | "audited" | "contacted" | "not_interested";
  notes: string;
  savedAt: string;
}

type StatusOption = LeadRecord["status"];

const STATUS_CONFIG: Record<
  StatusOption,
  { label: string; color: string; bgColor: string }
> = {
  to_audit: {
    label: "To Audit",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10 border-amber-500/30",
  },
  audited: {
    label: "Audited",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/30",
  },
  contacted: {
    label: "Contacted",
    color: "text-sky-400",
    bgColor: "bg-sky-500/10 border-sky-500/30",
  },
  not_interested: {
    label: "Not Interested",
    color: "text-zinc-500",
    bgColor: "bg-zinc-500/10 border-zinc-500/30",
  },
};

const STORAGE_KEY = "prysmn_scraper_leads";

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────

function loadFromStorage(): LeadRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(leads: LeadRecord[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch {
    console.error("Failed to save to localStorage");
  }
}

function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function exportToCSV(leads: LeadRecord[]) {
  const headers = [
    "Business Name",
    "Rating",
    "Reviews",
    "Website",
    "Phone",
    "Address",
    "Status",
    "Notes",
  ];
  const rows = leads.map((l) => [
    `"${l.name.replace(/"/g, '""')}"`,
    l.rating ?? "N/A",
    l.user_ratings_total ?? 0,
    l.website ?? "No website",
    l.phone ?? "No phone",
    `"${l.address.replace(/"/g, '""')}"`,
    STATUS_CONFIG[l.status].label,
    `"${l.notes.replace(/"/g, '""')}"`,
  ]);

  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `prysmn-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ──────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────

export default function ScraperPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [onlyWithWebsites, setOnlyWithWebsites] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const tableRef = useRef<HTMLDivElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = loadFromStorage();
    setLeads(stored);
    setInitialized(true);
  }, []);

  // Save to localStorage whenever leads change
  useEffect(() => {
    if (!initialized) return;
    saveToStorage(leads);
  }, [leads, initialized]);

  const updateLead = useCallback((id: string, updates: Partial<LeadRecord>) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...updates } : l))
    );
  }, []);

  const performSearch = useCallback(
    async (query: string, pageToken?: string) => {
      const isLoadMore = !!pageToken;
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);

      try {
        const params = new URLSearchParams();
        if (pageToken) {
          params.set("pagetoken", pageToken);
        } else {
          params.set("query", query);
        }

        const res = await fetch(`/api/places?${params.toString()}`);
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to fetch results");
          toast.error(data.error || "Search failed");
          return;
        }

        const newLeads: LeadRecord[] = (data.results || []).map(
          (r: {
            place_id: string;
            name: string;
            address: string;
            rating: number | null;
            user_ratings_total: number;
            website: string | null;
            phone: string | null;
            types: string[];
          }) => ({
            id: generateId(),
            place_id: r.place_id,
            name: r.name,
            address: r.address,
            rating: r.rating,
            user_ratings_total: r.user_ratings_total,
            website: r.website,
            phone: r.phone,
            types: r.types,
            status: "to_audit" as StatusOption,
            notes: "",
            savedAt: new Date().toISOString(),
          })
        );

        if (isLoadMore) {
          setLeads((prev) => {
            const existingIds = new Set(prev.map((l) => l.place_id));
            const uniqueNew = newLeads.filter(
              (l) => !existingIds.has(l.place_id)
            );
            return [...prev, ...uniqueNew];
          });
        } else {
          setLeads(newLeads);
        }

        // Google requires a short delay before using the next page token
        if (data.next_page_token) {
          // The token becomes valid after a small delay
          setTimeout(() => {
            setNextPageToken(data.next_page_token);
          }, 2000);
        } else {
          setNextPageToken(null);
        }

        setSearchCount((prev) => prev + 1);
        toast.success(
          isLoadMore
            ? `Loaded ${newLeads.length} more results`
            : `Found ${newLeads.length} businesses`,
          {
            description:
              data.next_page_token
                ? "More results available"
                : "All results loaded",
          }
        );
      } catch {
        setError("Network error. Please try again.");
        toast.error("Network error");
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    []
  );

  const handleSearch = () => {
    if (!keyword.trim() || !location.trim()) {
      toast.error("Please enter both a keyword and location");
      return;
    }

    const query = `${keyword.trim()} in ${location.trim()}`;
    setNextPageToken(null);
    performSearch(query);
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      performSearch("", nextPageToken);
    }
  };

  const handleClearAll = () => {
    setLeads([]);
    setNextPageToken(null);
    setSearchCount(0);
    localStorage.removeItem(STORAGE_KEY);
    toast.success("All results cleared");
  };

  const handleExport = () => {
    const leadsToExport = filteredLeads;
    if (leadsToExport.length === 0) {
      toast.error("No results to export");
      return;
    }
    exportToCSV(leadsToExport);
    toast.success(`Exported ${leadsToExport.length} leads to CSV`);
  };

  // Filtering
  const filteredLeads = leads.filter((lead) => {
    if (onlyWithWebsites && !lead.website) return false;
    return true;
  });

  // Stats
  const totalLeads = leads.length;
  const withWebsite = leads.filter((l) => l.website).length;
  const auditedCount = leads.filter((l) => l.status === "audited").length;
  const contactedCount = leads.filter((l) => l.status === "contacted").length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <Search className="w-4 h-4 text-black" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                Lead Scraper
              </h1>
              <p className="text-xs text-zinc-500">
                Prysmn Internal Tool
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleExport}
              disabled={filteredLeads.length === 0}
              className="text-zinc-400 hover:text-white"
            >
              <Download className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              disabled={leads.length === 0}
              className="text-zinc-400 hover:text-red-400"
            >
              <Trash2 className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:inline">Clear All</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
        {/* Search Bar */}
        <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Label className="text-xs text-zinc-500 mb-1.5 block">
                Keyword
              </Label>
              <Input
                placeholder="e.g. plumbers, dentists, electricians"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 h-10"
              />
            </div>
            <div className="flex-1">
              <Label className="text-xs text-zinc-500 mb-1.5 block">
                Location
              </Label>
              <Input
                placeholder="e.g. Sydney, Australia"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 h-10"
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleSearch}
                disabled={loading || (!keyword.trim() && !location.trim())}
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold h-10 w-full sm:w-auto px-6"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Filters row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Checkbox
                id="filter-website"
                checked={onlyWithWebsites}
                onCheckedChange={(checked) =>
                  setOnlyWithWebsites(checked === true)
                }
                className="border-zinc-600 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
              />
              <Label
                htmlFor="filter-website"
                className="text-sm text-zinc-400 cursor-pointer flex items-center gap-1.5"
              >
                <Filter className="w-3.5 h-3.5" />
                Only show businesses with websites
              </Label>
            </div>

            {nextPageToken && !loading && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="border-white/[0.1] text-zinc-400 hover:text-white hover:bg-white/[0.05] ml-auto"
              >
                {loadingMore ? (
                  <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                ) : (
                  <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                )}
                Load More Results
              </Button>
            )}
          </div>
        </div>

        {/* Stats Bar */}
        {leads.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-[#111111] border border-white/[0.06] rounded-lg p-3">
              <p className="text-xs text-zinc-500 mb-0.5">Total Leads</p>
              <p className="text-xl font-semibold">{totalLeads}</p>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-lg p-3">
              <p className="text-xs text-zinc-500 mb-0.5">With Website</p>
              <p className="text-xl font-semibold text-amber-400">
                {withWebsite}
                <span className="text-xs text-zinc-500 font-normal ml-1.5">
                  {totalLeads > 0
                    ? Math.round((withWebsite / totalLeads) * 100)
                    : 0}
                  %
                </span>
              </p>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-lg p-3">
              <p className="text-xs text-zinc-500 mb-0.5">Audited</p>
              <p className="text-xl font-semibold text-emerald-400">
                {auditedCount}
              </p>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-lg p-3">
              <p className="text-xs text-zinc-500 mb-0.5">Contacted</p>
              <p className="text-xl font-semibold text-sky-400">
                {contactedCount}
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-red-400 font-medium text-sm">{error}</p>
              <p className="text-red-400/60 text-xs mt-1">
                Make sure GOOGLE_PLACES_API_KEY is set in your .env file.
              </p>
            </div>
          </div>
        )}

        {/* Results Table */}
        <div ref={tableRef} className="bg-[#111111] border border-white/[0.06] rounded-xl overflow-hidden">
          {filteredLeads.length === 0 && !loading && leads.length === 0 ? (
            /* Empty State */
            <div className="py-20 text-center px-4">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-zinc-600" />
              </div>
              <h3 className="text-lg font-medium text-zinc-400 mb-1">
                No leads yet
              </h3>
              <p className="text-sm text-zinc-600 max-w-md mx-auto">
                Search for businesses using a keyword and location. Results will
                be saved automatically so you can pick up where you left off.
              </p>
            </div>
          ) : filteredLeads.length === 0 &&
            onlyWithWebsites &&
            leads.length > 0 ? (
            /* Filtered Empty State */
            <div className="py-12 text-center px-4">
              <Filter className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
              <p className="text-sm text-zinc-500">
                No businesses with websites found. Try removing the filter.
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto max-h-[calc(100vh-380px)] overflow-y-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-[#111111] z-10">
                    <TableRow className="border-white/[0.06] hover:bg-transparent">
                      <TableHead className="text-zinc-500 font-medium text-xs uppercase tracking-wider min-w-[200px]">
                        Business Name
                      </TableHead>
                      <TableHead className="text-zinc-500 font-medium text-xs uppercase tracking-wider w-[100px]">
                        Rating
                      </TableHead>
                      <TableHead className="text-zinc-500 font-medium text-xs uppercase tracking-wider min-w-[180px]">
                        Website
                      </TableHead>
                      <TableHead className="text-zinc-500 font-medium text-xs uppercase tracking-wider min-w-[140px]">
                        Phone
                      </TableHead>
                      <TableHead className="text-zinc-500 font-medium text-xs uppercase tracking-wider min-w-[200px]">
                        Address
                      </TableHead>
                      <TableHead className="text-zinc-500 font-medium text-xs uppercase tracking-wider w-[140px]">
                        Status
                      </TableHead>
                      <TableHead className="text-zinc-500 font-medium text-xs uppercase tracking-wider min-w-[160px]">
                        Notes
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => (
                      <TableRow
                        key={lead.id}
                        className="border-white/[0.04] hover:bg-white/[0.02] group"
                      >
                        {/* Business Name */}
                        <TableCell className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-400 font-bold text-xs">
                              {lead.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium text-sm text-white truncate max-w-[240px]">
                              {lead.name}
                            </span>
                          </div>
                        </TableCell>

                        {/* Rating */}
                        <TableCell className="py-3 px-3">
                          {lead.rating ? (
                            <div className="flex items-center gap-1.5">
                              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                              <span className="text-sm font-medium text-white">
                                {lead.rating}
                              </span>
                              <span className="text-xs text-zinc-500">
                                ({lead.user_ratings_total})
                              </span>
                            </div>
                          ) : (
                            <span className="text-xs text-zinc-600">N/A</span>
                          )}
                        </TableCell>

                        {/* Website */}
                        <TableCell className="py-3 px-3">
                          {lead.website ? (
                            <a
                              href={lead.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors truncate max-w-[220px]"
                            >
                              <Globe className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">
                                {lead.website
                                  .replace(/^https?:\/\//, "")
                                  .replace(/\/$/, "")}
                              </span>
                              <ExternalLink className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <span className="text-xs text-zinc-600 italic">
                              No website
                            </span>
                          )}
                        </TableCell>

                        {/* Phone */}
                        <TableCell className="py-3 px-3">
                          {lead.phone ? (
                            <a
                              href={`tel:${lead.phone}`}
                              className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5 shrink-0 text-zinc-500" />
                              {lead.phone}
                            </a>
                          ) : (
                            <span className="text-xs text-zinc-600">
                              Not listed
                            </span>
                          )}
                        </TableCell>

                        {/* Address */}
                        <TableCell className="py-3 px-3">
                          <div className="flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                            <span className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                              {lead.address}
                            </span>
                          </div>
                        </TableCell>

                        {/* Status */}
                        <TableCell className="py-3 px-3">
                          <Select
                            value={lead.status}
                            onValueChange={(value) =>
                              updateLead(lead.id, {
                                status: value as StatusOption,
                              })
                            }
                          >
                            <SelectTrigger
                              className={`h-8 text-xs border rounded-md ${STATUS_CONFIG[lead.status].bgColor}`}
                            >
                              <span
                                className={STATUS_CONFIG[lead.status].color}
                              >
                                {STATUS_CONFIG[lead.status].label}
                              </span>
                              <ChevronDown className="w-3 h-3 opacity-50" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a1a1a] border-white/[0.1]">
                              {(Object.keys(STATUS_CONFIG) as StatusOption[]).map(
                                (status) => (
                                  <SelectItem
                                    key={status}
                                    value={status}
                                    className={`text-xs ${STATUS_CONFIG[status].color} focus:bg-white/[0.05]`}
                                  >
                                    {STATUS_CONFIG[status].label}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        </TableCell>

                        {/* Notes */}
                        <TableCell className="py-3 px-3">
                          <input
                            type="text"
                            value={lead.notes}
                            onChange={(e) =>
                              updateLead(lead.id, { notes: e.target.value })
                            }
                            placeholder="Add notes..."
                            className="w-full bg-transparent border-b border-transparent hover:border-white/[0.1] focus:border-amber-500/50 focus:outline-none text-xs text-zinc-400 placeholder:text-zinc-700 py-1 transition-colors"
                          />
                        </TableCell>
                      </TableRow>
                    ))}

                    {/* Loading More Row */}
                    {loadingMore && (
                      <TableRow className="border-0">
                        <TableCell
                          colSpan={7}
                          className="py-8 text-center"
                        >
                          <Loader2 className="w-5 h-5 animate-spin text-amber-500 mx-auto" />
                          <p className="text-xs text-zinc-500 mt-2">
                            Loading more results...
                          </p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Table Footer */}
              <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between">
                <p className="text-xs text-zinc-500">
                  Showing {filteredLeads.length} of {leads.length} leads
                  {onlyWithWebsites && " (filtered by website)"}
                </p>
                <p className="text-xs text-zinc-600">
                  Auto-saved to browser
                </p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
