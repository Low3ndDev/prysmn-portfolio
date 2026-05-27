'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Leaf,
  Flower2,
  Palette,
  Droplets,
  Trees,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Sparkles,
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Garden Design',
    description: 'Bespoke garden designs tailored to your property, lifestyle, and the Gold Coast climate. From concept sketches to planting plans.',
  },
  {
    icon: Flower2,
    title: 'Lawn Care & Maintenance',
    description: 'Regular lawn mowing, edging, fertilising, and weed control. Keep your yard looking immaculate all year round.',
  },
  {
    icon: Trees,
    title: 'Hardscaping & Paving',
    description: 'Retaining walls, paved pathways, outdoor kitchens, and entertaining areas built to last with premium materials.',
  },
  {
    icon: Droplets,
    title: 'Irrigation Systems',
    description: 'Smart irrigation installation and maintenance to keep your garden thriving while conserving water.',
  },
]

const values = [
  {
    title: 'Sustainability',
    description: 'Native plant selection, water-wise design, and eco-friendly materials that work with the Gold Coast environment.',
  },
  {
    title: 'Quality Materials',
    description: 'We source premium stone, timber, and plants from trusted local suppliers. No shortcuts on anything that goes into your garden.',
  },
  {
    title: 'Local Knowledge',
    description: '15 years working with Gold Coast soils, coastal conditions, and council regulations means fewer surprises and better results.',
  },
]

const galleryItems = [
  { gradient: 'from-green-800 to-emerald-600', label: 'Tropical Garden' },
  { gradient: 'from-amber-700 to-yellow-600', label: 'Stone Pathway' },
  { gradient: 'from-teal-800 to-cyan-600', label: 'Water Feature' },
  { gradient: 'from-emerald-900 to-green-600', label: 'Entertaining Area' },
  { gradient: 'from-lime-800 to-green-500', label: 'Native Garden' },
  { gradient: 'from-green-900 to-teal-700', label: 'Paved Patio' },
]

const processSteps = [
  { step: '01', title: 'Consultation', description: 'Free on-site visit to discuss your vision, assess the space, and understand your budget.' },
  { step: '02', title: 'Design', description: 'Our landscape architect creates a detailed plan with 3D renders so you can visualise the result.' },
  { step: '03', title: 'Build', description: 'Our experienced crew brings the design to life with quality materials and expert craftsmanship.' },
  { step: '04', title: 'Enjoy', description: 'Handover with care instructions, plus optional ongoing maintenance to keep everything looking perfect.' },
]

const testimonials = [
  {
    name: 'Mark & Jenny Harris',
    role: 'Homeowners, Burleigh Heads',
    text: 'Coastline completely transformed our backyard. The outdoor kitchen and fire pit area is now where we spend every weekend. Absolutely love it.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Property Developer, Broadbeach',
    text: 'We engage Coastline for all our display home landscaping. Their designs consistently help our properties sell faster and at a premium.',
    rating: 5,
  },
  {
    name: 'Paul Nguyen',
    role: 'Homeowner, Palm Beach',
    text: 'From the initial consultation to the final walkthrough, the whole experience was seamless. The native garden design exceeded our expectations.',
    rating: 5,
  },
]

export default function Site() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#3e2723]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf5eb]/95 backdrop-blur-md border-b border-[#3e2723]/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#2d5016] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-green-300" />
            </div>
            <span className="font-bold text-[#2d5016] text-lg">Coastline Landscaping</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3e2723]/70">
            <a href="#about" className="hover:text-[#2d5016] transition-colors">About</a>
            <a href="#services" className="hover:text-[#2d5016] transition-colors">Services</a>
            <a href="#gallery" className="hover:text-[#2d5016] transition-colors">Gallery</a>
            <a href="#process" className="hover:text-[#2d5016] transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-[#2d5016] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#2d5016] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex bg-[#2d5016] hover:bg-[#3a6b1e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Free Design Consult
            </a>
            <button className="md:hidden p-2 text-[#3e2723]" onClick={() => setMobileNav(!mobileNav)}>
              {mobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileNav && (
          <div className="md:hidden bg-[#faf5eb] border-t border-[#3e2723]/10 px-6 py-4 space-y-3">
            {['About', 'Services', 'Gallery', 'Process', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-[#3e2723]/70 font-medium py-2 hover:text-[#2d5016]"
                onClick={() => setMobileNav(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          <Image
            src="/portfolio/coastline-hero.png"
            alt="Coastline Landscaping"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d5016]/85 via-[#2d5016]/60 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-white/15 text-green-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Gold Coast&apos;s Premier Landscaping Team
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Transform Your{' '}
                  <span className="text-green-300">Outdoor Space</span>
                </h1>
                <p className="text-green-100/90 text-lg leading-relaxed mb-8 max-w-md">
                  Custom garden design and landscaping for Gold Coast homes. 
                  From concept to completion, we create outdoor living spaces you&apos;ll love.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="bg-white hover:bg-gray-50 text-[#2d5016] font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
                  >
                    Free Consultation
                  </a>
                  <a
                    href="#gallery"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
                  >
                    View Our Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#2d5016] font-semibold text-sm uppercase tracking-wider mb-2">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d5016]">Built on the Gold Coast, For the Gold Coast</h2>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-[#3e2723]/70 leading-relaxed">
              Coastline Landscaping has been transforming outdoor spaces across the Gold Coast for over 15 years. 
              We believe your garden should be an extension of your home — a place to relax, entertain, and connect 
              with nature. Our team of qualified horticulturists and landscape builders combine creative design with 
              practical knowledge of local conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-[#2d5016]/10">
                <h3 className="font-bold text-lg text-[#2d5016] mb-2">{v.title}</h3>
                <p className="text-[#3e2723]/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#2d5016] font-semibold text-sm uppercase tracking-wider mb-2">Our Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d5016]">Landscaping Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-[#faf5eb] rounded-xl p-6 border border-[#2d5016]/10 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2d5016] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#2d5016] mb-2">{service.title}</h3>
                      <p className="text-[#3e2723]/60 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#2d5016] font-semibold text-sm uppercase tracking-wider mb-2">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d5016]">Recent Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${item.gradient} h-48 md:h-56 group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white font-semibold text-sm drop-shadow-md">{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-green-300 font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-black text-white/10 mb-4">{step.step}</div>
                <h3 className="font-bold text-lg text-green-300 mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#2d5016] font-semibold text-sm uppercase tracking-wider mb-2">Client Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d5016]">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#faf5eb] rounded-xl p-6 border border-[#2d5016]/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#2d5016] text-[#2d5016]" />
                  ))}
                </div>
                <p className="text-[#3e2723]/70 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#2d5016] text-sm">{t.name}</p>
                  <p className="text-[#3e2723]/40 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#2d5016] font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2d5016] mb-6">Start Your Landscaping Project</h2>
              <p className="text-[#3e2723]/70 leading-relaxed mb-8">
                Book a free on-site consultation and let us bring your outdoor vision to life. 
                We&apos;ll assess your space, discuss options, and provide a detailed quote — no obligation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2d5016]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#2d5016]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#3e2723]/40 font-medium">Phone</p>
                    <p className="text-[#2d5016] font-semibold">0405 678 901</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2d5016]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2d5016]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#3e2723]/40 font-medium">Email</p>
                    <p className="text-[#2d5016] font-semibold">hello@coastlinelandscaping.com.au</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2d5016]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2d5016]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#3e2723]/40 font-medium">Location</p>
                    <p className="text-[#2d5016] font-semibold">18 Palm Beach Blvd, Burleigh Heads QLD 4220</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white rounded-xl p-6 sm:p-8 border border-[#2d5016]/10 shadow-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#3e2723] mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-lg border border-[#2d5016]/15 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5016]/20 focus:border-[#2d5016] transition-all bg-[#faf5eb]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3e2723] mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#2d5016]/15 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5016]/20 focus:border-[#2d5016] transition-all bg-[#faf5eb]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3e2723] mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 py-3 rounded-lg border border-[#2d5016]/15 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5016]/20 focus:border-[#2d5016] transition-all bg-[#faf5eb]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3e2723] mb-1">Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your landscaping project..."
                    className="w-full px-4 py-3 rounded-lg border border-[#2d5016]/15 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5016]/20 focus:border-[#2d5016] transition-all bg-[#faf5eb] resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-[#2d5016] hover:bg-[#3a6b1e] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Book Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3310] text-green-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#2d5016] flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-green-300" />
                </div>
                <span className="font-bold text-white">Coastline Landscaping</span>
              </div>
              <p className="text-sm text-green-300/70 leading-relaxed">
                Premium landscaping services across the Gold Coast. 
                Transforming outdoor spaces since 2009.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0405 678 901</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@coastlinelandscaping.com.au</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 18 Palm Beach Blvd, Burleigh Heads QLD 4220</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Service Areas</h4>
              <div className="space-y-2 text-sm text-green-300/70">
                <p>Burleigh Heads & Palm Beach</p>
                <p>Broadbeach & Surfers Paradise</p>
                <p>Nerang & Hinterland</p>
                <p>Tweed Heads & Northern Rivers</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-green-400/60">ABN 98 765 432 109 | QBSA Licence #QLD9876543</p>
            <p className="text-xs text-green-400/60">&copy; 2024 Coastline Landscaping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
