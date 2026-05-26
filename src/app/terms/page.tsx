import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Prysmn',
  description: 'Prysmn terms of service. The terms and conditions governing use of our website and services.',
}

export default function TermsOfService() {
  return (
    <main className="bg-[#0a0a0a] text-white/60 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <a href="/" className="text-amber-400/70 text-sm hover:text-amber-400 transition-colors mb-12 inline-block">
          &larr; Back to Prysmn
        </a>
        <h1 className="text-3xl font-light text-white tracking-tight mb-8">Terms of Service</h1>
        <div className="space-y-6 text-sm font-light leading-relaxed">
          <p><strong className="text-white/70">Last updated:</strong> May 2025</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">1. Services</h2>
          <p>Prysmn provides business audit, consulting, and marketing automation services. The free audit is a no-obligation consultation. Any paid engagement will be governed by a separate service agreement agreed upon by both parties before work begins.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">2. The Free Audit</h2>
          <p>The free audit is a 30-minute consultation where we review your business operations and provide recommendations. The audit and any materials shared during it are for informational purposes. We are not liable for any decisions made based on audit recommendations. The audit does not create a client-service provider relationship unless a separate agreement is signed.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">3. Intellectual Property</h2>
          <p>All content on this website (text, design, code, branding) is owned by Prysmn. Any custom systems, automations, or configurations built for clients remain the intellectual property of Prysmn until fully paid for, at which point ownership transfers to the client as outlined in the service agreement.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">4. Limitation of Liability</h2>
          <p>Prysmn provides consulting and implementation services. We do not guarantee specific business results, revenue increases, or lead conversion rates. Results depend on many factors outside our control, including market conditions, client execution, and product/service quality.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">5. Payment Terms</h2>
          <p>For paid services, payment terms will be outlined in the service agreement. Invoices are due within 14 days of issue unless otherwise stated. Late payments may incur a fee of 2% per month on the outstanding balance.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">6. Cancellation</h2>
          <p>Either party may cancel a service agreement with 14 days written notice. Any work completed up to the cancellation date must be paid for. Unused pre-paid portions will be refunded on a pro-rata basis.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">7. Governing Law</h2>
          <p>These terms are governed by the laws of Australia. Any disputes shall be resolved in the courts of New South Wales, Australia.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">8. Contact</h2>
          <p>For questions about these terms, contact us at hello@prysmn.com.</p>
        </div>
      </div>
    </main>
  )
}
