/**
 * WhatsApp Utility — BWP IMPACT
 * All lead capture CTAs redirect to WhatsApp with pre-filled messages.
 * Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local to your real number.
 */

// Reads from env at runtime; falls back to placeholder
export const WHATSAPP_BUSINESS_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917304601580';

// ─── Free Audit Form ────────────────────────────────────────────────────────
export interface AuditFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  socialUrl?: string;
  painPoint: string;
}

export function generateAuditWhatsAppLink(data: AuditFormData): string {
  const message =
    `Hi BWP IMPACT! 👋\n\n` +
    `I'd like to claim my *Free Digital Audit*.\n\n` +
    `*My Details:*\n` +
    `📌 Name: ${data.fullName}\n` +
    `📌 Business: ${data.businessName}\n` +
    `📌 Email: ${data.email}\n` +
    `📌 Phone: ${data.phone}\n` +
    (data.socialUrl ? `📌 Social: ${data.socialUrl}\n` : '') +
    `📌 Challenge: ${getPainPointLabel(data.painPoint)}\n\n` +
    `Please share the next steps!`;

  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── VisibilityX Form ────────────────────────────────────────────────────────────
export interface VisibilityXFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  description: string;
}

export function generateVisibilityXWhatsAppLink(data: VisibilityXFormData): string {
  const message =
    `Hi BWP IMPACT! 👋\n\n` +
    `I'm interested in *VisibilityX AI Podcast Production*.\n\n` +
    `*My Details:*\n` +
    `📌 Name: ${data.fullName}\n` +
    `📌 Company: ${data.companyName}\n` +
    `📌 Email: ${data.email}\n` +
    `📌 Phone: ${data.phone}\n` +
    `📌 About My Business: ${data.description}\n\n` +
    `I'd like to deploy my AI Brand Avatar!`;

  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── Contact Us Form ────────────────────────────────────────────────────────
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export function generateContactWhatsAppLink(data: ContactFormData): string {
  const message =
    `Hi BWP IMPACT! 👋\n\n` +
    `I'd like to get in touch.\n\n` +
    `*My Details:*\n` +
    `📌 Name: ${data.fullName}\n` +
    `📌 Email: ${data.email}\n` +
    `📌 Phone: ${data.phone}\n` +
    `📌 Message: ${data.message}\n\n` +
    `Looking forward to connecting!`;

  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── Quick CTA (no form) ─────────────────────────────────────────────────────
export type QuickCtaType = 'audit' | 'strategy' | 'visibilityx';

export function generateQuickWhatsAppLink(type: QuickCtaType): string {
  const messages: Record<QuickCtaType, string> =
  {
    audit:
      `Hi BWP IMPACT! 👋\n\nI'd like to claim my *Free Digital Audit*. Please share more details!`,
    strategy:
      `Hi BWP IMPACT! 👋\n\nI'm interested in booking a *1-on-1 Growth Strategy Session*. When can we connect?`,
    visibilityx:
      `Hi BWP IMPACT! 👋\n\nI'm interested in *VisibilityX AI Podcasts*. Can you tell me more?`,
  };

  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(messages[type])}`;
}

// ─── Helper ──────────────────────────────────────────────────────────────────
function getPainPointLabel(value: string): string {
  const map: Record<string, string> = {
    'low-engagement':  'Low engagement on social media',
    'no-leads':        'Not generating enough leads',
    'high-ad-costs':   'High ad costs, poor ROI',
    'no-strategy':     'No clear marketing strategy',
    'time-constraints':'No time to manage content',
    'other':           'Other',
  };
  return map[value] ?? value;
}
