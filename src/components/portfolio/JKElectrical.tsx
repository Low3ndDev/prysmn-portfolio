'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  CheckCircle,
  Zap,
  Home,
  Building2,
  Search,
  AlertTriangle,
  Menu,
  X,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Wiring',
    description: 'Complete electrical installations, rewiring, and upgrades for homes of all sizes. From new builds to heritage restorations.',
  },
  {
    icon: Building2,
    title: 'Commercial Electrical',
    description: 'Reliable electrical solutions for offices, retail spaces, and commercial buildings. Minimal downtime guaranteed.',
  },
  {
    icon: Search,
    title: 'Safety Inspections',
    description: 'Thorough electrical safety audits and compliance checks. Keep your property safe and up to Australian standards.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Repairs',
    description: '24/7 emergency electrical service across Sydney. Fast response when you need it most.',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Inner West',
    text: 'JK Electrical rewired our entire 1920s terrace. Professional, clean, and always on time. Could not recommend them more highly.',
    rating: 5,
  },
  {
    icon: null,
    name: 'David Chen',
    role: 'Restaurant Owner, Surry Hills',
    text: 'They handled our full commercial fit-out with zero issues. The team was flexible around our trading hours and the result is fantastic.',
    rating: 5,
  },
  {
    name: 'Emma Watson',
    role: 'Property Manager, Eastern Suburbs',
    text: 'We use JK Electrical for all our rental properties. Reliable quotes, excellent workmanship, and they always leave the site spotless.',
    rating: 5,
  },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2,000+', label: 'Projects Completed' },
  { value: '100%', label: 'Licensed & Insured' },
]

const badges = [
  { icon: Shield, label: 'Fully Licensed' },
  { icon: CheckCircle, label: 'Fully Insured' },
  { icon: Clock, label: '24/7 Emergency' },
  { icon: Zap, label: 'Same Day Service' },
]

export default function Site() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-blue-900 flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <span className="font-bold text-blue-900 text-lg">JK Electrical</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-900 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-blue-900 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:0412345678" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-800 transition-colors">
              <Phone className="w-4 h-4" />
              0412 345 678
            </a>
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm">
              Free Quote
            </a>
            <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileNav(!mobileNav)}>
              {mobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileNav && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 font-medium py-2 hover:text-blue-900"
                onClick={() => setMobileNav(false)}
              >
                {item}
              </a>
            ))}
            <a href="tel:0412345678" className="flex items-center gap-2 text-blue-900 font-semibold py-2">
              <Phone className="w-4 h-4" /> 0412 345 678
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          <Image
            src="/portfolio/jk-electrical-hero.png"
            alt="JK Electrical Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/40" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  24/7 Emergency Service Available
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Reliable Electrical Services Across{' '}
                  <span className="text-amber-400">Sydney</span>
                </h1>
                <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-md">
                  Licensed electricians you can trust. From rewiring to emergency repairs, 
                  we deliver safe, quality workmanship every time.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-amber-500/30"
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="tel:0412345678"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                    <Icon className="w-6 h-6 text-blue-900 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Sydney&apos;s Trusted Electricians Since 2009
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                JK Electrical Solutions was founded by James Kowalski with a simple mission: 
                provide Sydney homeowners and businesses with electrical services they can genuinely 
                rely on. Over 15 years later, we&apos;ve completed more than 2,000 projects across 
                every suburb in the Sydney metro area.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team of fully licensed electricians combines old-school reliability with modern 
                techniques. We stay current with the latest Australian wiring standards and safety 
                regulations, so you never have to worry about compliance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it&apos;s a complete home rewire, a commercial fit-out, or a late-night 
                emergency, we treat every job with the same care and attention to detail.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-blue-900 mb-1">{stat.value}</div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.label} className="flex items-center gap-3 justify-center">
                  <Icon className="w-6 h-6 text-amber-400 shrink-0" />
                  <span className="text-white font-semibold text-sm">{badge.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-blue-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
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
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">Request a Free Quote</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours with a competitive, 
                no-obligation quote. For emergencies, call us directly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Phone</p>
                    <p className="text-blue-900 font-semibold">0412 345 678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Email</p>
                    <p className="text-blue-900 font-semibold">info@jkelectrical.com.au</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Location</p>
                    <p className="text-blue-900 font-semibold">42 Bridge Road, Marrickville NSW 2204</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your electrical needs..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-white resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <span className="font-bold text-white">JK Electrical</span>
              </div>
              <p className="text-sm text-blue-300 leading-relaxed">
                Licensed electrical contractors serving Sydney for over 15 years. 
                Quality workmanship, guaranteed.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0412 345 678</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@jkelectrical.com.au</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 42 Bridge Rd, Marrickville NSW 2204</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-amber-400 font-semibold">24/7 Emergency Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-blue-400">ABN 12 345 678 901 | NSW Electrical Licence #123456</p>
            <p className="text-xs text-blue-400">&copy; 2024 JK Electrical Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
