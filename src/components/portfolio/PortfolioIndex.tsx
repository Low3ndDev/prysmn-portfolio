'use client'

import { ArrowRight, Zap, Leaf, Droplets, ExternalLink, ChevronLeft } from 'lucide-react'

interface PortfolioIndexProps {
  onSelect: (view: 'jk-electrical' | 'coastline-landscaping' | 'rapid-plumbing') => void
}

const demos = [
  {
    id: 'jk-electrical' as const,
    title: 'JK Electrical Solutions',
    trade: 'Electrician',
    location: 'Sydney, NSW',
    type: 'One-Page Scroll',
    description: 'Clean, trust-focused design for a licensed residential and commercial electrician. Dark blue + gold palette signals professionalism and reliability.',
    gradient: 'from-blue-900 to-blue-700',
    icon: Zap,
    features: ['Lead capture form', 'Service cards', 'Trust badges', 'Testimonials'],
    accent: '#f59e0b',
  },
  {
    id: 'coastline-landscaping' as const,
    title: 'Coastline Landscaping',
    trade: 'Landscaper',
    location: 'Gold Coast, QLD',
    type: 'Multi-Section Page',
    description: 'Visual-first design for a premium landscaping business. Green + cream palette reflects nature and quality. Includes gallery grid and process timeline.',
    gradient: 'from-green-900 to-green-700',
    icon: Leaf,
    features: ['Image gallery', 'Process timeline', 'Service showcase', 'Design consultation CTA'],
    accent: '#2d5016',
  },
  {
    id: 'rapid-plumbing' as const,
    title: 'Rapid Plumbing Melbourne',
    trade: 'Plumber',
    location: 'Melbourne, VIC',
    type: 'One-Page with Tips',
    description: 'Urgency-driven design for an emergency plumbing service. Bold red accents create action. Includes blog-style tips section for SEO value.',
    gradient: 'from-red-900 to-red-700',
    icon: Droplets,
    features: ['Emergency CTA', 'Tips blog section', '60-min guarantee', 'Service cards'],
    accent: '#dc2626',
  },
]

export default function PortfolioIndex({ onSelect }: PortfolioIndexProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg tracking-tight">Prysmn</h1>
              <p className="text-emerald-400 text-[10px] uppercase tracking-[0.2em] font-medium">Web Solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs hidden sm:block">Demo Portfolio</span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            3 Demo Websites Ready
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
            Portfolio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Showcase
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
            Professional website designs built for Australian trades businesses. 
            Each site is fully responsive, conversion-optimized, and ready to deploy.
          </p>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-6">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <button
                key={demo.id}
                onClick={() => onSelect(demo.id)}
                className="group relative text-left rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/[0.03] hover:bg-white/[0.06]"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Preview area */}
                  <div className={`lg:w-80 h-48 lg:h-auto bg-gradient-to-br ${demo.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                    <Icon className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-white/80 text-xs font-medium bg-black/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                        {demo.type}
                      </span>
                      <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{demo.trade}</span>
                          <span className="text-zinc-700">|</span>
                          <span className="text-xs text-zinc-500">{demo.location}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {demo.title}
                        </h3>
                      </div>
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                        <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-xl">
                      {demo.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {demo.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            Prysmn Web Solutions — Professional websites for Australian trades
          </p>
          <div className="flex items-center gap-4 text-zinc-600 text-xs">
            <span>AUD $897/mo</span>
            <span>|</span>
            <span>Website + GHL + Automation</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
