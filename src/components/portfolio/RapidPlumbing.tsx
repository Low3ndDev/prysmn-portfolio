'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Droplets,
  Wrench,
  Flame,
  ShieldCheck,
  Clock,
  BadgeDollarSign,
  ThumbsUp,
  AlertTriangle,
  Menu,
  X,
  ArrowRight,
  Thermometer,
  Pipette,
  Snowflake,
} from 'lucide-react'

const services = [
  {
    icon: AlertTriangle,
    title: 'Emergency Plumbing',
    description: 'Burst pipes, flooding, gas leaks — we respond within 60 minutes, 24 hours a day, 7 days a week. No callout fees.',
    urgent: true,
  },
  {
    icon: Flame,
    title: 'Hot Water Systems',
    description: 'Installation, repair, and replacement of all major brands. Same-day service for most hot water issues.',
    urgent: false,
  },
  {
    icon: Pipette,
    title: 'Drain Cleaning',
    description: 'Blocked drains cleared fast using hydro-jet and camera inspection technology. No mess, no fuss.',
    urgent: false,
  },
  {
    icon: Wrench,
    title: 'Gas Fitting',
    description: 'Licensed gas fitters for appliance installation, gas line repairs, and safety inspections across Melbourne.',
    urgent: false,
  },
]

const features = [
  { icon: Clock, title: '60-Min Response', description: 'Guaranteed arrival within 60 minutes for emergencies across metro Melbourne.' },
  { icon: BadgeDollarSign, title: 'Upfront Pricing', description: 'Know the cost before we start. No hidden fees, no surprise charges on your bill.' },
  { icon: ThumbsUp, title: 'Lifetime Warranty', description: 'All workmanship guaranteed. If something goes wrong, we come back and fix it free.' },
  { icon: ShieldCheck, title: '24/7 Available', description: 'Plumbing emergencies don\'t wait for business hours. Neither do we.' },
]

const tips = [
  {
    icon: Thermometer,
    title: '5 Signs Your Hot Water System Needs Replacing',
    excerpt: 'If your hot water is running lukewarm, making strange noises, or showing rusty water, it might be time for an upgrade. Most systems last 8-12 years. Here are the tell-tale signs to watch for before you end up with no hot water at all.',
    tag: 'Maintenance',
  },
  {
    icon: Droplets,
    title: 'How to Prevent Blocked Drains',
    excerpt: 'Blocked drains are one of the most common plumbing issues we see. The good news is most blockages are preventable with a few simple habits. Avoid pouring grease down the sink, use drain screens, and run hot water through your drains weekly.',
    tag: 'DIY Tips',
  },
  {
    icon: Snowflake,
    title: 'Winter Plumbing Checklist for Melbourne Homes',
    excerpt: 'Melbourne winters can be tough on your plumbing. Insulate exposed pipes, know where your main shut-off valve is, and keep your hot water system maintained. A few simple steps can prevent burst pipes and expensive emergency callouts.',
    tag: 'Seasonal',
  },
]

const testimonials = [
  {
    name: 'Tony Barbaro',
    role: 'Homeowner, Richmond',
    text: 'Had a burst pipe at 2am on a Sunday. Rapid Plumbing was here in 40 minutes. Fixed the pipe, cleaned up, and even helped me file the insurance claim. Absolute legends.',
    rating: 5,
  },
  {
    name: 'Rebecca Torres',
    role: 'Cafe Owner, Fitzroy',
    text: 'Our commercial kitchen drain was completely blocked during peak breakfast service. They arrived in under an hour and had us running again fast. Professional and efficient.',
    rating: 5,
  },
  {
    name: 'James O\'Brien',
    role: 'Homeowner, South Yarra',
    text: 'Replaced our ancient hot water system the same day we called. Great price, clean install, and the new system is incredibly efficient. Highly recommend.',
    rating: 5,
  },
]

export default function Site() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg">Rapid Plumbing</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-red-600 transition-colors">Why Us</a>
            <a href="#tips" className="hover:text-red-600 transition-colors">Plumbing Tips</a>
            <a href="#testimonials" className="hover:text-red-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:0400123456"
              className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors animate-pulse shadow-md shadow-red-600/20"
            >
              <Phone className="w-4 h-4" />
              EMERGENCY
            </a>
            <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileNav(!mobileNav)}>
              {mobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileNav && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            {['Services', 'Why Us', 'Plumbing Tips', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-600 font-medium py-2 hover:text-red-600"
                onClick={() => setMobileNav(false)}
              >
                {item}
              </a>
            ))}
            <a href="tel:0400123456" className="flex items-center gap-2 text-red-600 font-bold py-2">
              <Phone className="w-4 h-4" /> 0400 123 456
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          <Image
            src="/portfolio/rapid-plumbing-hero.png"
            alt="Rapid Plumbing Melbourne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/90 via-red-900/75 to-red-900/40" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-200 text-xs font-bold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-red-500/30 uppercase tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  60-Minute Emergency Response
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Melbourne&apos;s Fastest{' '}
                  <span className="text-red-400">Plumbers</span>
                </h1>
                <p className="text-red-100/90 text-lg leading-relaxed mb-8 max-w-md">
                  24/7 emergency plumbing with a 60-minute response guarantee. 
                  Upfront pricing, no callout fees, and workmanship you can trust.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:0400123456"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-lg transition-colors shadow-lg shadow-red-600/30 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call 0400 123 456
                  </a>
                  <a
                    href="#contact"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
                  >
                    Book Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-bold">Plumbing Emergency?</span>
          </div>
          <span className="hidden sm:block text-red-200">|</span>
          <a href="tel:0400123456" className="flex items-center gap-2 font-bold hover:underline">
            <Phone className="w-4 h-4" />
            Call Now: 0400 123 456
          </a>
          <span className="hidden sm:block text-red-200">|</span>
          <span className="text-red-100">60-minute response guaranteed</span>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Plumbing Solutions for Every Situation</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md ${
                    service.urgent ? 'border-red-200 hover:border-red-300' : 'border-gray-100 hover:border-red-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      service.urgent ? 'bg-red-50' : 'bg-gray-50'
                    }`}>
                      <Icon className={`w-6 h-6 ${service.urgent ? 'text-red-600' : 'text-gray-700'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-900">{service.title}</h3>
                        {service.urgent && (
                          <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded-full uppercase">
                            24/7
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Why Melbourne Trusts Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built on Speed, Honesty & Quality</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Plumbing Tips */}
      <section id="tips" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Knowledge Base</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Plumbing Tips & Advice</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
              Practical advice from our licensed plumbers to help you avoid common issues and save money.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip) => {
              const Icon = tip.icon
              return (
                <article
                  key={tip.title}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group cursor-pointer"
                >
                  <div className="h-40 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center relative">
                    <Icon className="w-12 h-12 text-white/30 group-hover:text-white/50 transition-colors" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tip.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{tip.excerpt}</p>
                    <div className="flex items-center gap-1 mt-4 text-red-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Melbourne Homeowners Love Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 border border-red-600/30">
                <AlertTriangle className="w-3.5 h-3.5" />
                24/7 Emergency Service
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need a Plumber? We&apos;re Here.</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether it&apos;s a burst pipe emergency or a scheduled hot water system replacement, 
                get in touch and we&apos;ll sort it out fast. No job too big, no job too small.
              </p>
              <div className="space-y-4">
                <a href="tel:0400123456" className="flex items-center gap-4 bg-red-600 hover:bg-red-700 p-4 rounded-xl transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-red-200 font-medium">Emergency Line</p>
                    <p className="text-white font-bold text-lg">0400 123 456</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Email</p>
                    <p className="text-gray-200 font-semibold">emergency@rapidplumbing.com.au</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Location</p>
                    <p className="text-gray-200 font-semibold">15 Smith Street, Richmond VIC 3121</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white rounded-xl p-6 sm:p-8 text-gray-900 shadow-2xl">
              <h3 className="font-bold text-xl mb-1">Book a Plumber</h3>
              <p className="text-gray-500 text-sm mb-6">Fill in the form and we&apos;ll call you back within 30 minutes.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="James Wilson"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Suburb</label>
                  <input
                    type="text"
                    placeholder="e.g. Richmond, Fitzroy, South Yarra"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Describe the Issue</label>
                  <textarea
                    rows={3}
                    placeholder="What's the plumbing issue?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Emergency', 'Today', 'This Week'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        className="text-xs font-medium py-2.5 rounded-lg border border-gray-200 hover:border-red-600 hover:bg-red-50 hover:text-red-600 transition-all text-gray-600"
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors shadow-sm"
                >
                  Get Callback in 30 Min
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white">Rapid Plumbing</span>
              </div>
              <p className="text-sm leading-relaxed">
                Melbourne&apos;s fastest emergency plumbers. Licensed, insured, and available 24/7. 
                Proudly serving metro Melbourne since 2012.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-red-400 font-semibold"><Phone className="w-4 h-4" /> 0400 123 456</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> emergency@rapidplumbing.com.au</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 15 Smith St, Richmond VIC 3121</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Service Areas</h4>
              <div className="space-y-2 text-sm">
                <p>Richmond, Fitzroy, Collingwood</p>
                <p>South Yarra, Prahran, Toorak</p>
                <p>Carlton, Brunswick, Coburg</p>
                <p>St Kilda, Elwood, Brighton</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">ABN 45 678 901 234 | Victorian Plumbing Licence #VPL567890</p>
            <p className="text-xs text-gray-600">&copy; 2024 Rapid Plumbing Melbourne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
