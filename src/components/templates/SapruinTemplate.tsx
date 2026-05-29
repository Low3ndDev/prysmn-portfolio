"use client";

import { siteConfig } from "@/lib/siteConfig";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Users,
  Award,
  Zap,
  Quote,
} from "lucide-react";
import { useState } from "react";

const { business, services, testimonials, serviceAreas } = siteConfig;

// Sapruin-inspired design system
// Warm, premium feel with large rounded corners, Poppins font, orange/amber accent
// Sections: Hero → Counter stats → About → Services → Testimonials → Team → CTA → Footer

export default function SapruinTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brand = siteConfig.brand.color;

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#4f4f4f",
      }}
    >
      {/* ─── Navbar ─── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#" className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-base"
                style={{ backgroundColor: brand }}
              >
                {business.name.charAt(0)}
              </div>
              <span className="font-semibold text-[#121212] text-base sm:text-lg">
                {business.name}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {["Services", "About", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[#4f4f4f] hover:text-[#121212] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${business.phoneHref}`}
                className="text-sm font-medium text-[#121212] hover:opacity-70 transition-opacity"
              >
                {business.phone}
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: brand }}
              >
                Get a Quote
              </a>
            </div>

            <button
              className="md:hidden p-2 text-[#121212]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 space-y-3">
              {["Services", "About", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-2 py-2 text-sm font-medium text-[#4f4f4f] hover:text-[#121212]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex items-center gap-2 px-2 py-2 text-sm font-semibold"
                  style={{ color: brand }}
                >
                  <Phone className="w-4 h-4" />
                  {business.phone}
                </a>
                <a
                  href="#contact"
                  className="block text-center px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                  style={{ backgroundColor: brand }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#fff5e9" }}>
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: `${brand}40` }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: `${brand}30` }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                style={{ backgroundColor: `${brand}20`, color: brand }}
              >
                <Zap className="w-3.5 h-3.5" />
                {business.location}
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-6"
                style={{ color: "#121212" }}
              >
                Home Solutions with{" "}
                <span className="relative inline-block">
                  {business.name}
                  <span
                    className="absolute -bottom-1 left-0 w-full h-3 rounded-full opacity-40"
                    style={{ backgroundColor: brand }}
                  />
                </span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg text-[#4f4f4f]">
                {business.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                  style={{ backgroundColor: brand }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 transition-all hover:scale-[1.02]"
                  style={{ borderColor: "#12121220", color: "#121212" }}
                >
                  Our Services
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 text-sm text-[#4f4f4f]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" style={{ color: brand }} />
                  <span>Fully Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" style={{ color: brand }} />
                  <span>Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" style={{ color: brand }} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative hidden lg:block">
              <div
                className="w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl"
                style={{ backgroundColor: "#f0ece4" }}
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Placeholder — in production, this would be a hero image */}
                  <div
                    className="text-[120px] font-bold opacity-10"
                    style={{ color: brand }}
                  >
                    {business.name.charAt(0)}
                  </div>
                  {/* Floating stat card */}
                  <div
                    className="absolute bottom-8 -left-8 px-6 py-4 rounded-2xl shadow-xl text-white"
                    style={{ backgroundColor: "#121212" }}
                  >
                    <p className="text-3xl font-bold">{business.yearFounded.replace(/\D/g, "") || "10+"}</p>
                    <p className="text-xs text-gray-400">Years of Service</p>
                  </div>
                  {/* Floating badge */}
                  <div
                    className="absolute top-8 -right-4 px-5 py-3 rounded-2xl shadow-xl text-white font-semibold text-sm"
                    style={{ backgroundColor: brand }}
                  >
                    Available Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Counter ─── */}
      <section className="bg-[#121212] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: business.yearFounded, label: "Years Experience", icon: Award },
              { value: "500+", label: "Projects Completed", icon: CheckCircle2 },
              { value: "100%", label: "Satisfaction Rate", icon: Star },
              { value: "24/7", label: "Emergency Support", icon: Clock },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${brand}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: brand }} />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg"
                  style={{ backgroundColor: "#f0ece4" }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-bold opacity-10" style={{ color: brand }}>
                      {business.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <div
                  className="aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg mt-8"
                  style={{ backgroundColor: "#e8e4dc" }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-bold opacity-10" style={{ color: brand }}>
                      {business.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl shadow-xl bg-white border border-gray-100"
              >
                <p className="text-sm text-[#4f4f4f]">
                  Trusted by <span className="font-bold" style={{ color: brand }}>500+</span> homeowners
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: brand }}>
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] leading-tight mb-6">
                Your Trusted {business.name.split(" ").pop() || "Partner"} in {business.location}
              </h2>
              <p className="text-base leading-relaxed mb-6 text-[#4f4f4f]">
                {business.aboutText}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: "Prompt & reliable service" },
                  { icon: CheckCircle2, text: "Upfront, honest pricing" },
                  { icon: CheckCircle2, text: "Fully licensed & insured" },
                  { icon: CheckCircle2, text: "Satisfaction guaranteed" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <Icon className="w-5 h-5 shrink-0" style={{ color: brand }} />
                    <span className="text-sm font-medium text-[#121212]">{text}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: brand }}
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="py-20 sm:py-28" style={{ backgroundColor: "#fff5e9" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: brand }}>
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] leading-tight mb-4">
              Get Comprehensive {business.name.split(" ").pop() || ""} Services
            </h2>
            <p className="text-base text-[#4f4f4f]">
              From simple repairs to complete projects, our expert solutions are designed to keep your home safe and comfortable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <div
                key={service.name}
                className="group bg-white rounded-[24px] p-7 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${brand}15` }}
                >
                  <span className="text-2xl font-bold" style={{ color: brand }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#121212] mb-2">{service.name}</h3>
                <p className="text-sm leading-relaxed text-[#4f4f4f] mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: brand }}
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: brand }}>
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] leading-tight mb-4">
              What Our Clients Say About Us
            </h2>
            <p className="text-base text-[#4f4f4f]">
              Here&apos;s what some of our valued clients have to say about their experience with {business.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-[24px] p-7 border border-gray-100 hover:shadow-lg transition-shadow relative"
              >
                <Quote
                  className="w-10 h-10 absolute top-5 right-5 opacity-10"
                  style={{ color: brand }}
                />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4"
                      style={{ fill: brand, color: brand }}
                    />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-[#121212] mb-3">
                  &ldquo;{t.name}&rdquo;
                </h3>
                <p className="text-sm leading-relaxed text-[#4f4f4f] mb-5">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: brand }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#121212]">{t.name}</p>
                    <p className="text-xs text-[#4f4f4f]">{t.suburb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#fff5e9" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: brand }}>
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] leading-tight mb-4">
              Get Service From Our Experienced Team
            </h2>
            <p className="text-base text-[#4f4f4f]">
              Our dedicated team of professionals is committed to providing exceptional {business.name.split(" ").pop()?.toLowerCase() || ""} services tailored to your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: business.ownerName, role: "Owner & Lead", initials: business.ownerName.charAt(0) },
              { name: "Alex Chen", role: "Senior Technician", initials: "A" },
              { name: "Jamie Park", role: "Project Manager", initials: "J" },
            ].map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div
                  className="aspect-square flex items-center justify-center relative"
                  style={{ backgroundColor: "#f0ece4" }}
                >
                  <div className="text-7xl font-bold opacity-10" style={{ color: brand }}>
                    {member.initials}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#121212]">{member.name}</h3>
                  <p className="text-sm text-[#4f4f4f]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Areas ─── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#121212] mb-2">
              Areas We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-[#121212] hover:shadow-sm transition-shadow"
              >
                <MapPin className="w-4 h-4" style={{ color: brand }} />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / Contact ─── */}
      <section id="contact" className="py-20 sm:py-28 bg-[#121212] relative overflow-hidden">
        {/* Decorative blob */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: brand }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: brand }}>
              Contact Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Solve Your Home Problems With {business.name.split(" ").pop() || business.name}!
            </h2>
            <p className="text-base text-gray-400">
              Ready to get started? Reach out today for a free, no-obligation quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: business.phone, href: `tel:${business.phoneHref}` },
                { icon: Mail, label: "Email Us", value: business.email, href: `mailto:${business.email}` },
                { icon: MapPin, label: "Location", value: business.location, href: null },
                { icon: Clock, label: "Hours", value: "Mon — Sat, 7am — 7pm", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${brand}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: brand }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-base font-medium text-white hover:opacity-80 transition-opacity">
                        {value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Newsletter */}
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm font-bold text-white mb-3">Subscribe Our Newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-opacity-100"
                  />
                  <button
                    className="px-5 py-3 rounded-full text-white font-semibold text-sm shrink-0 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: brand }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[24px] p-7 sm:p-8">
              <h3 className="text-xl font-bold text-[#121212] mb-1">Request a Free Quote</h3>
              <p className="text-sm text-[#4f4f4f] mb-6">Fill in the form and we&apos;ll get back to you shortly.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#121212] mb-1.5">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                      style={{ "--tw-ring-color": `${brand}40` } as React.CSSProperties}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#121212] mb-1.5">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                      style={{ "--tw-ring-color": `${brand}40` } as React.CSSProperties}
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#121212] mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                    style={{ "--tw-ring-color": `${brand}40` } as React.CSSProperties}
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#121212] mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ "--tw-ring-color": `${brand}40` } as React.CSSProperties}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                  style={{ backgroundColor: brand }}
                >
                  Send Request
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#0d0d0d] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-base"
                  style={{ backgroundColor: brand }}
                >
                  {business.name.charAt(0)}
                </div>
                <span className="font-semibold text-white text-base">{business.name}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {business.description.slice(0, 120)}...
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2.5">
                {["Services", "About", "Testimonials", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Service Areas</h4>
              <div className="space-y-2.5">
                {serviceAreas.slice(0, 5).map((area) => (
                  <p key={area} className="text-sm text-gray-500">{area}</p>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Contact</h4>
              <div className="space-y-2.5">
                <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  {business.phone}
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  <Mail className="w-4 h-4" />
                  {business.email}
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  {business.location}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Website by{" "}
              <span style={{ color: brand }}>Prysmn Web Solutions</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
