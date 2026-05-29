'use client'

import { useState, useEffect, useRef } from 'react'
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
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Sun,
  Wifi,
  Battery,
  Home,
  Wrench,
  AlertTriangle,
  MessageSquare,
  Calendar,
} from 'lucide-react'

/* ──────────── Data ──────────── */

const services = [
  {
    icon: Wrench,
    title: 'General Electrical Repairs',
    description:
      'From flickering lights to faulty switches, we diagnose and fix electrical problems fast. Same-day service available.',
  },
  {
    icon: Zap,
    title: 'Switchboard Upgrades',
    description:
      'Upgrade your old switchboard to handle modern power demands. Safe, compliant, and future-ready.',
  },
  {
    icon: Sun,
    title: 'Solar & Battery',
    description:
      'Reduce your power bills with professional solar panel and battery storage installation.',
  },
  {
    icon: Wifi,
    title: 'Smart Home Wiring',
    description:
      'Smart lighting, automation, and home network wiring for modern Sunbury homes.',
  },
  {
    icon: Home,
    title: 'Data & Communications',
    description:
      'Phone points, data cabling, and TV antenna installation for homes and businesses.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Callouts',
    description:
      "Electrical emergency? We're on call 24/7 for Sunbury and surrounding areas.",
  },
]

const testimonials = [
  {
    name: 'David Patterson',
    suburb: 'Sunbury',
    rating: 5,
    text: "Had a switchboard upgrade done last month. Turned up on time, cleaned up after themselves, and even explained what they were doing. Couldn't ask for better service.",
  },
  {
    name: 'Sarah Nguyen',
    suburb: 'Diggers Rest',
    rating: 5,
    text: "Called for an emergency at 9pm when our power went out. They were here within the hour and had everything sorted. Absolute legends.",
  },
  {
    name: 'Mark Thompson',
    suburb: 'Gisborne',
    rating: 5,
    text: "Got solar panels and a battery installed. The team was professional from quote to install. Already seeing savings on our power bills. Highly recommend.",
  },
  {
    name: "Jenny O'Connor",
    suburb: 'Melton',
    rating: 5,
    text: "Used Quantum for our new home build — data points, smart lighting, the lot. Everything works perfectly and the pricing was fair. Will use again.",
  },
]

const faqs = [
  {
    q: 'What areas do you service?',
    a: 'We service Sunbury, Diggers Rest, Gisborne, Melton, Bacchus Marsh, and outer Melbourne north-west. If you\u2019re unsure, give us a call \u2014 we\u2019ll let you know if we can help.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. All our electricians hold current Victorian electrical licences and we carry full public liability insurance. You can verify our licence on the Energy Safe Victoria website.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'We offer free, no-obligation quotes for most residential work. For emergency callouts, we provide an upfront price before starting any work so there are no surprises.',
  },
  {
    q: 'How quickly can you get to me?',
    a: 'For emergencies, we aim to be there within the hour. For scheduled work, most jobs can be booked within 1\u20132 business days depending on availability.',
  },
  {
    q: 'Do you work on weekends?',
    a: 'Yes. We offer emergency service 24/7 including weekends and public holidays. Scheduled non-urgent work is available Monday to Saturday.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, bank transfer, and all major credit cards. Payment is due on completion of work unless otherwise arranged for larger projects.',
  },
]

const stats = [
  { value: 100, suffix: '+', label: '5-Star Reviews' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 5.0, suffix: '\u2605', label: 'Google Rating', decimal: true },
  { value: 24, suffix: '/7', label: 'Emergency Service' },
]

/* ──────────── Animated Counter ──────────── */

function AnimatedCounter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const start = performance.now()
          const step = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = decimal
              ? parseFloat((eased * target).toFixed(1))
              : Math.floor(eased * target)
            setCount(current)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, decimal])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-white">
      {decimal ? count.toFixed(1) : count}
      <span className="text-[#c0c5ce]">{suffix}</span>
    </div>
  )
}

/* ──────────── FAQ Accordion Item ──────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#1a4b8c] text-sm sm:text-base pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#1a4b8c] shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#1a4b8c] shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

/* ──────────── Main Component ──────────── */

export default function QuantumElectrical() {
  const [mobileNav, setMobileNav] = useState(false)
  const [showBooking, setShowBooking] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ──── Header ──── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#1a4b8c] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-[#1a4b8c] text-lg">Quantum Electrical</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-[#1a4b8c] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#1a4b8c] transition-colors">About</a>
            <a href="#reviews" className="hover:text-[#1a4b8c] transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-[#1a4b8c] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#1a4b8c] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:0459219960"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#1a4b8c] hover:text-[#2a5b9c] transition-colors"
            >
              <Phone className="w-4 h-4" />
              0459 219 960
            </a>
            <a
              href="#contact"
              className="bg-[#1a4b8c] hover:bg-[#2a5b9c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Free Quote
            </a>
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileNav(!mobileNav)}
            >
              {mobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileNav && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            {['Services', 'About', 'Reviews', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 font-medium py-2 hover:text-[#1a4b8c]"
                onClick={() => setMobileNav(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:0459219960"
              className="flex items-center gap-2 text-[#1a4b8c] font-semibold py-2"
            >
              <Phone className="w-4 h-4" /> 0459 219 960
            </a>
          </div>
        )}
      </nav>

      {/* ──── Sticky Phone (Mobile) ──── */}
      <a
        href="tel:0459219960"
        className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-[#1a4b8c] rounded-full flex items-center justify-center shadow-lg shadow-[#1a4b8c]/30 active:scale-95 transition-transform"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>

      {/* ──── Hero ──── */}
      <section className="relative pt-16">
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          <Image
            src="/portfolio/quantum-electrical-hero.png"
            alt="Quantum Electrical Services — Sunbury Electricians"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a4b8c]/90 via-[#1a4b8c]/75 to-[#1a4b8c]/40" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left — headline */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    5.0 Star Rated on Google
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    Sunbury&apos;s Most Trusted Electricians — 5.0★ Rated | Local | Reliable
                  </h1>
                  <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                    Professional electrical services for Sunbury and surrounds.
                    From repairs to solar, we handle it all with care and expertise.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:0459219960"
                      className="bg-white hover:bg-gray-50 text-[#1a4b8c] font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                    <a
                      href="#contact"
                      className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
                    >
                      Book Online
                    </a>
                  </div>
                </div>

                {/* Right — callback form */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <h3 className="font-bold text-xl text-[#1a4b8c] mb-1">Request a Callback</h3>
                  <p className="text-gray-500 text-sm mb-6">We&apos;ll call you back within 2 hours</p>
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-bold text-[#1a4b8c] text-lg mb-2">Request Received!</h4>
                      <p className="text-gray-500 text-sm mb-4">
                        We&apos;ll call you within 2 hours during business hours.
                        You&apos;ll also receive an SMS confirmation.
                      </p>
                      <p className="text-gray-400 text-xs">Mon-Fri 7am-6pm | Sat 8am-2pm | 24/7 Emergency</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input
                          type="text"
                          placeholder="e.g. John"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20 focus:border-[#1a4b8c] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="04XX XXX XXX"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20 focus:border-[#1a4b8c] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">What do you need help with?</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20 focus:border-[#1a4b8c] transition-all bg-white">
                          <option value="">Select a service...</option>
                          <option value="repairs">General Electrical Repairs</option>
                          <option value="switchboard">Switchboard Upgrades</option>
                          <option value="solar">Solar & Battery</option>
                          <option value="smart">Smart Home Wiring</option>
                          <option value="data">Data & Communications</option>
                          <option value="emergency">Emergency Callout</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(true)}
                        className="w-full bg-[#1a4b8c] hover:bg-[#2a5b9c] text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
                      >
                        Request Callback
                      </button>
                      <p className="text-gray-400 text-xs text-center">
                        <Shield className="w-3 h-3 inline mr-1" />
                        Your information is never shared
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Trust / Stats Bar ──── */}
      <section className="bg-[#1a4b8c] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                <p className="text-[#c0c5ce] text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-white/10">
            {[
              { icon: CheckCircle, label: 'Fully Licensed' },
              { icon: Shield, label: 'Fully Insured' },
              { icon: Clock, label: 'Same Day Service' },
              { icon: Star, label: '5.0★ Google Rating' },
            ].map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#c0c5ce]" />
                  <span className="text-white/80 text-sm font-medium">{badge.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──── Services ──── */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#1a4b8c] font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4b8c]">Electrical Solutions for Every Need</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1a4b8c]/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1a4b8c]/10 flex items-center justify-center mb-4 group-hover:bg-[#1a4b8c] transition-colors">
                    <Icon className="w-6 h-6 text-[#1a4b8c] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1a4b8c] mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──── Testimonials ──── */}
      <section id="reviews" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#1a4b8c] font-semibold text-sm uppercase tracking-wider mb-2">Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4b8c]">What Our Customers Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-sm transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#1a4b8c] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.suburb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── About ──── */}
      <section id="about" className="py-20 bg-[#1a4b8c] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c0c5ce] font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Family-Owned. Sunbury-Bred. Here to Stay.</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Quantum Electrical Services has been serving Sunbury and Melbourne&apos;s north-west
                for over 12 years. We&apos;re a family-owned business built on the simple idea that
                every homeowner deserves a reliable, honest electrician who shows up on time and
                does quality work.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                All our electricians are fully licensed and insured, and we stand behind every job
                with our satisfaction guarantee. Whether it&apos;s a quick repair, a full rewire,
                or a solar installation, we treat your home like our own.
              </p>
              <p className="text-white/80 leading-relaxed">
                We&apos;re proud of our 5.0-star Google rating and the trust our community has
                placed in us. That&apos;s not something we take for granted.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'Licensed & Insured', desc: 'Full Victorian electrical licence and public liability cover.' },
                { icon: Clock, title: 'Fast Response', desc: 'Same-day service for most jobs. Emergency 24/7.' },
                { icon: CheckCircle, title: 'Satisfaction Guarantee', desc: 'If you\u2019re not happy, we\u2019ll make it right.' },
                { icon: Star, title: '5.0★ Google Rating', desc: 'Over 100 five-star reviews from real customers.' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <Icon className="w-6 h-6 text-[#c0c5ce] mb-3" />
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#1a4b8c] font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4b8c]">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── Contact ──── */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#1a4b8c] font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4b8c] mb-6">Need an Electrician? Call Us.</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether it&apos;s an emergency or a scheduled job, we&apos;re here to help. Give
                us a call or fill out the form and we&apos;ll get back to you within 2 hours.
              </p>
              <div className="space-y-4 mb-8">
                <a href="tel:0459219960" className="flex items-center gap-4 bg-[#1a4b8c] hover:bg-[#2a5b9c] p-4 rounded-xl transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-medium">Call Anytime</p>
                    <p className="text-white font-bold text-lg">0459 219 960</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1a4b8c]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1a4b8c]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Email</p>
                    <p className="text-[#1a4b8c] font-semibold">info@quantumelectrical.com.au</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1a4b8c]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#1a4b8c]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Service Areas</p>
                    <p className="text-gray-700 font-semibold text-sm">Sunbury, Diggers Rest, Gisborne, Melton, Bacchus Marsh</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h4 className="font-semibold text-[#1a4b8c] text-sm mb-3">Business Hours</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Monday – Friday</span><span className="font-medium">7:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Saturday</span><span className="font-medium">8:00 AM – 2:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Sunday</span><span className="text-gray-500">Closed</span></div>
                  <div className="flex justify-between text-[#1a4b8c]"><span className="font-semibold">Emergency</span><span className="font-semibold">24/7 Available</span></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl text-[#1a4b8c] mb-1">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-6">We&apos;ll respond within 2 hours</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20 focus:border-[#1a4b8c] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20 focus:border-[#1a4b8c] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20 focus:border-[#1a4b8c] transition-all bg-white">
                    <option value="">Select a service...</option>
                    <option value="repairs">General Electrical Repairs</option>
                    <option value="switchboard">Switchboard Upgrades</option>
                    <option value="solar">Solar & Battery</option>
                    <option value="smart">Smart Home Wiring</option>
                    <option value="data">Data & Communications</option>
                    <option value="emergency">Emergency Callout</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(true)}
                  className="w-full bg-[#1a4b8c] hover:bg-[#2a5b9c] text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Footer ──── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#1a4b8c] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white">Quantum Electrical</span>
              </div>
              <p className="text-sm leading-relaxed">
                Sunbury&apos;s trusted electrical team. 12+ years of quality service
                across Melbourne&apos;s north-west.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#services" className="block hover:text-white transition-colors">Services</a>
                <a href="#reviews" className="block hover:text-white transition-colors">Reviews</a>
                <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
                <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0459 219 960</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@quantumelectrical.com.au</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Sunbury VIC 3429</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              Website Concept by <span className="text-[#1a4b8c] font-semibold">Prysmn</span>
            </p>
            <p className="text-xs text-gray-600">&copy; 2025 Quantum Electrical Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ──── Live Chat Bubble ──── */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#1a4b8c] rounded-full flex items-center justify-center shadow-lg shadow-[#1a4b8c]/30 hover:bg-[#2a5b9c] transition-colors"
      >
        {showChat ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
      </button>

      {showChat && (
        <div className="fixed bottom-24 left-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-[#1a4b8c] p-4">
            <h4 className="font-bold text-white text-sm">Leave a Message</h4>
            <p className="text-white/70 text-xs">We&apos;ll respond within 2 hours</p>
          </div>
          <div className="p-4 space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20"
            />
            <textarea
              rows={3}
              placeholder="How can we help?"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20 resize-none"
            />
            <button
              type="button"
              className="w-full bg-[#1a4b8c] hover:bg-[#2a5b9c] text-white font-semibold py-2 rounded-lg text-sm transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* ──── Booking Modal ──── */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl text-[#1a4b8c]">Book an Appointment</h3>
              <button onClick={() => setShowBooking(false)} className="p-1 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-4 mb-6">
              <Calendar className="w-5 h-5 text-[#1a4b8c]" />
              <div>
                <p className="text-sm font-medium text-[#1a4b8c]">Next Available</p>
                <p className="text-xs text-gray-500">Tomorrow, 9:00 AM – 11:00 AM</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20">
                  <option>Morning (7am – 12pm)</option>
                  <option>Afternoon (12pm – 6pm)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. John"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="04XX XXX XXX"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4b8c]/20"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[#1a4b8c] hover:bg-[#2a5b9c] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Confirm Booking
              </button>
              <p className="text-gray-400 text-xs text-center">
                You&apos;ll receive an SMS confirmation
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
