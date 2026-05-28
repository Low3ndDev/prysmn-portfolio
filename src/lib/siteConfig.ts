// Site configuration — reads from env vars with sensible defaults
// Hermes only needs to provide: business_name, phone, suburb, state, services, brand_color

function safeJSON<T>(str: string | undefined, fallback: T): T {
  if (!str) return fallback;
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function extractFirstName(businessName: string): string {
  const match = businessName.match(/^([A-Z][a-z]+)\b/);
  return match ? match[1] : 'Our Team';
}

function generateTagline(businessName: string, suburb: string, state: string): string {
  return `Trusted ${businessName} in ${suburb}, ${state}`;
}

function generateEmail(businessName: string): string {
  const slug = slugify(businessName);
  return `info@${slug}.com.au`;
}

const rawServices = safeJSON<{ name: string; description: string }[]>(
  process.env.NEXT_PUBLIC_SERVICES,
  []
);

const defaultServices = [
  { name: 'Emergency Service', description: 'Fast response when you need it most — available 24/7 for urgent situations.' },
  { name: 'Residential Work', description: 'Complete home solutions with guaranteed workmanship and clean site management.' },
  { name: 'Commercial Projects', description: 'Reliable service for businesses, property managers, and construction projects.' },
  { name: 'Maintenance & Repairs', description: 'Preventative maintenance and prompt repairs to keep everything running smoothly.' },
  { name: 'Free Quotes', description: 'Transparent, no-obligation quotes — know the cost before we start any work.' },
  { name: 'Guaranteed Work', description: 'All work backed by our satisfaction guarantee and full licensing compliance.' },
];

const rawTestimonials = safeJSON<{ name: string; text: string; rating: number; suburb: string }[]>(
  process.env.NEXT_PUBLIC_TESTIMONIALS,
  []
);

const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Pro Trades';
const suburb = process.env.NEXT_PUBLIC_SUBURB || 'Melbourne';
const state = process.env.NEXT_PUBLIC_STATE || 'VIC';
const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || '#fca12c';
const template = process.env.NEXT_PUBLIC_TEMPLATE || 'default';

export const siteConfig = {
  business: {
    name: businessName,
    slug: slugify(businessName),
    tagline: process.env.NEXT_PUBLIC_TAGLINE || generateTagline(businessName, suburb, state),
    phone: process.env.NEXT_PUBLIC_PHONE || '1300 000 000',
    phoneHref: (process.env.NEXT_PUBLIC_PHONE || '1300 000 000').replace(/\s/g, ''),
    email: process.env.NEXT_PUBLIC_EMAIL || generateEmail(businessName),
    suburb,
    state,
    location: `${suburb}, ${state}`,
    ownerName: process.env.NEXT_PUBLIC_OWNER_NAME || extractFirstName(businessName),
    yearFounded: process.env.NEXT_PUBLIC_YEAR_FOUNDED || 'Over 10 Years',
    licenseNumber: process.env.NEXT_PUBLIC_LICENSE_NUMBER || '',
    description: process.env.NEXT_PUBLIC_DESCRIPTION || `${businessName} has been providing reliable, professional services to ${suburb} and surrounding areas. Fully licensed and insured, we take pride in delivering quality workmanship on every job.`,
    aboutText: process.env.NEXT_PUBLIC_ABOUT_TEXT || `At ${businessName}, we believe in honest, reliable service. With years of experience serving ${suburb} and the surrounding ${state} area, our team of qualified professionals delivers quality results every time. We treat your home or business like our own, ensuring clean workspaces and clear communication from start to finish.`,
  },
  services: rawServices.length > 0 ? rawServices : defaultServices,
  testimonials: rawTestimonials.length > 0
    ? rawTestimonials
    : [
        { name: 'Sarah M.', text: `Absolutely fantastic service. ${extractFirstName(businessName)} arrived on time, explained everything clearly, and the quality of work was outstanding. Will definitely use again and recommend to everyone.`, rating: 5, suburb },
        { name: 'David T.', text: 'Professional from start to finish. Fair pricing, no hidden surprises, and they cleaned up after the job was done. This is exactly what you want from a trades service.', rating: 5, suburb },
        { name: 'Michelle K.', text: 'Had an emergency situation and they came out the same day. The problem was fixed quickly and the price was very reasonable. So grateful for their help!', rating: 5, suburb },
      ],
  serviceAreas: safeJSON<string[]>(
    process.env.NEXT_PUBLIC_SERVICE_AREAS,
    [suburb]
  ),
  brand: {
    color: brandColor,
  },
  template,
};
