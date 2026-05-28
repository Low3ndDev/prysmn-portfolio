"use client";

import { siteConfig } from "@/lib/siteConfig";
import SapruinTemplate from "@/components/templates/SapruinTemplate";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  Star,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const { business, services, testimonials, serviceAreas } = siteConfig;

function DefaultTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Announcement Bar */}
      <div
        className="text-white text-center text-sm py-2.5 px-4 font-medium"
        style={{ backgroundColor: "var(--brand-color)" }}
      >
        <span className="hidden sm:inline">
          Now serving {serviceAreas.join(", ")} —{" "}
        </span>
        Call <a href={`tel:${business.phoneHref}`} className="underline font-bold hover:opacity-90">{business.phone}</a> for a free quote
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md"
                style={{ backgroundColor: "var(--brand-color)" }}
              >
                {business.name.charAt(0)}
              </div>
              <div>
                <h1 className="font-bold text-lg sm:text-xl text-gray-900 leading-tight">{business.name}</h1>
                <p className="text-xs text-gray-500 hidden sm:block">{business.location}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
              <a href="#areas" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Areas</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-color)" }}>
                <Phone className="w-4 h-4" />{business.phone}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: "var(--brand-color)" }}>
                Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
              {["Services", "About", "Reviews", "Areas", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>{item}</a>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold" style={{ color: "var(--brand-color)" }}>
                  <Phone className="w-4 h-4" />{business.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white" style={{ backgroundColor: "var(--brand-color)" }}>
              <Clock className="w-4 h-4" />Available Now — {business.location}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Your Local{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, var(--brand-color), var(--brand-color-dark, ${siteConfig.brand.color}cc))` }}>
                {business.name}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">{business.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: "var(--brand-color)" }}>
                Get Your Free Quote <ChevronRight className="w-5 h-5" />
              </a>
              <a href={`tel:${business.phoneHref}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 text-base font-semibold transition-all" style={{ borderColor: "var(--brand-color)", color: "var(--brand-color)" }}>
                <Phone className="w-5 h-5" />{business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "Fully Licensed", sub: business.licenseNumber || "Qualified professionals" },
              { icon: CheckCircle2, title: "Fully Insured", sub: "Complete coverage" },
              { icon: Clock, title: business.yearFounded, sub: "Industry experience" },
              { icon: Award, title: "Guaranteed", sub: "Satisfaction promise" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--brand-color)15" }}>
                  <Icon className="w-6 h-6" style={{ color: "var(--brand-color)" }} />
                </div>
                <div><p className="font-semibold text-gray-900 text-sm">{title}</p><p className="text-xs text-gray-500">{sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "var(--brand-color)" }}>Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions for residential and commercial clients.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.name} className="group relative p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: "var(--brand-color)15" }}>
                  <CheckCircle2 className="w-6 h-6" style={{ color: "var(--brand-color)" }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: "var(--brand-color)" }}>
                <div className="w-full h-full flex items-center justify-center opacity-20"><div className="text-8xl font-bold">{business.name.charAt(0)}</div></div>
              </div>
              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 px-6 py-4 rounded-xl shadow-xl text-white" style={{ backgroundColor: "var(--brand-color)" }}>
                <p className="text-3xl font-bold">{business.yearFounded.replace(/\D/g, "") || "10+"}</p>
                <p className="text-sm opacity-90">Years of Experience</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "var(--brand-color)" }}>About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why {business.location} Trusts {business.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{business.aboutText}</p>
              <div className="space-y-3 mb-8">
                {["Prompt, reliable service every time", "Upfront pricing with no hidden fees", "Clean, respectful workmanship", "Available 7 days a week"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "var(--brand-color)" }} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: "var(--brand-color)" }}>
                Get to Know Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "var(--brand-color)" }}>Customer Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.suburb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "var(--brand-color)" }}>Service Areas</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-all">
                <MapPin className="w-4 h-4" style={{ color: "var(--brand-color)" }} />
                <span className="font-medium text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: "var(--brand-color)" }}>
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-white/80 text-lg mb-8">{business.description}</p>
                <div className="space-y-5">
                  <a href={`tel:${business.phoneHref}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"><Phone className="w-5 h-5" /></div>
                    <div><p className="text-white/70 text-xs uppercase tracking-wider">Call Us</p><p className="text-lg font-semibold">{business.phone}</p></div>
                  </a>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
                    <div><p className="text-white/70 text-xs uppercase tracking-wider">Email Us</p><p className="text-lg font-semibold">{business.email}</p></div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
                    <div><p className="text-white/70 text-xs uppercase tracking-wider">Location</p><p className="text-lg font-semibold">{business.location}</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 sm:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Free Quote</h3>
                <form className="space-y-4 mt-6" onSubmit={(e) => e.preventDefault()}>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label><input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400" placeholder="Your name" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400" placeholder="Your phone number" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400" placeholder="Your email address" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label><textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 resize-none" placeholder="Tell us about your project..." /></div>
                  <button type="submit" className="w-full py-3.5 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: "var(--brand-color)" }}>
                    Send Request <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: "var(--brand-color)" }}>{business.name.charAt(0)}</div>
                <h3 className="text-white font-bold text-lg">{business.name}</h3>
              </div>
              <p className="text-sm leading-relaxed">{business.description}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                {["Services", "About", "Reviews", "Areas", "Contact"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-white transition-colors">{item}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4" />{business.phone}</a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" />{business.email}</a>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{business.location}</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs">&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
            <p className="text-xs text-gray-600">Website by <span className="text-gray-400">Prysmn Web Solutions</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  if (siteConfig.template === "sapruin") {
    return <SapruinTemplate />;
  }
  return <DefaultTemplate />;
}
