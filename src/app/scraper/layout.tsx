"use client";

import { Toaster } from "@/components/ui/sonner";

export default function ScraperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "bg-[#1a1a1a] border border-white/[0.08] text-white",
        }}
        theme="dark"
      />
    </>
  );
}
