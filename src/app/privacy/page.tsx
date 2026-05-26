import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Prysmn',
  description: 'Prysmn privacy policy. How we collect, use, and protect your information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0a0a0a] text-white/60 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <a href="/" className="text-amber-400/70 text-sm hover:text-amber-400 transition-colors mb-12 inline-block">
          &larr; Back to Prysmn
        </a>
        <h1 className="text-3xl font-light text-white tracking-tight mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-sm font-light leading-relaxed">
          <p><strong className="text-white/70">Last updated:</strong> May 2025</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">1. Information We Collect</h2>
          <p>When you submit our audit request form, we collect the following information: your name, work email, business name, website URL, industry, and optional phone number. We also collect standard web analytics data (pages visited, time on site, browser type, device type) via cookies.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">2. How We Use Your Information</h2>
          <p>We use your information to: respond to your audit request, schedule and conduct the audit call, prepare audit findings and recommendations, communicate with you about our services, and improve our website and services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">3. Data Storage & Security</h2>
          <p>Your information is stored securely and accessed only by authorized team members. We use industry-standard security measures to protect your data. If we engage GoHighLevel as part of delivering services to you, your data may be processed within the GoHighLevel platform in accordance with their privacy policy.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">4. Cookies</h2>
          <p>We use essential cookies to ensure our website functions correctly. We may use analytics cookies to understand how visitors interact with our site. You can disable cookies in your browser settings, though this may affect site functionality.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">5. Third-Party Services</h2>
          <p>Our website may integrate with: GoHighLevel (for lead management and service delivery), Google Analytics (for website analytics), and Vercel (for hosting). Each service has its own privacy policy governing how they handle data.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">6. Your Rights</h2>
          <p>You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, withdraw consent for data processing, and lodge a complaint with a data protection authority.</p>

          <h2 className="text-lg font-medium text-white/80 mt-10 mb-3">7. Contact</h2>
          <p>For privacy-related inquiries, contact us at hello@prysmn.com.</p>
        </div>
      </div>
    </main>
  )
}
