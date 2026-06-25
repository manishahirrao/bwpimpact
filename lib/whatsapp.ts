/**
 * WhatsApp Utility Functions
 * Generates WhatsApp links with pre-filled messages
 */

// WhatsApp Business Number (update with actual number)
// Format: Country code + number without + or spaces

export const WHATSAPP_BUSINESS_NUMBER = '917304601580'; // UPDATE THIS WITH REAL NUMBER

/**
 * Generate WhatsApp link for Free Digital Audit
 */
export function generateAuditWhatsAppLink(formData: {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  socialUrl?: string;
  painPoint: string;
}): string {
  const message = `Hi BWP IMPACT! 👋

I'm interested in claiming my *Free Digital Audit*.

*My Details:*
📌 Name: ${formData.fullName}
📌 Business: ${formData.businessName}
📌 Email: ${formData.email}
📌 Phone: ${formData.phone}
${formData.socialUrl ? `📌 Social Media: ${formData.socialUrl}` : ''}
📌 Primary Challenge: ${getPainPointLabel(formData.painPoint)}

Please share the next steps!`;

  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate WhatsApp link for ImpactX
 */
export function generateImpactXWhatsAppLink(formData: {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  description: string;
}): string {
  const message = `Hi BWP IMPACT! 👋

I'm interested in *ImpactX AI Podcast Production*.

*My Details:*
📌 Name: ${formData.fullName}
📌 Company: ${formData.companyName}
📌 Email: ${formData.email}
📌 Phone: ${formData.phone}
📌 About My Business: ${formData.description}

I'd like to learn more about deploying my AI Brand Avatar!`;

  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate WhatsApp link for quick CTA (no form)
 */
export function generateQuickWhatsAppLink(ctaType: 'audit' | 'strategy' | 'impactx'): string {
  const messages = {
    audit: `Hi BWP IMPACT! 👋\n\nI'd like to claim my *Free Digital Audit*. Please share more details!`,
    strategy: `Hi BWP IMPACT! 👋\n\nI'm interested in booking a *1-on-1 Growth Strategy Session*. When can we connect?`,
    impactx: `Hi BWP IMPACT! 👋\n\nI'm interested in *ImpactX AI Podcasts*. Can you share more information?`
  };

  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(messages[ctaType])}`;
}

/**
 * Helper function to convert pain point value to readable label
 */
function getPainPointLabel(value: string): string {
  const labels: Record<string, string> = {
    'low-engagement': 'Low engagement on social media',
    'no-leads': 'Not generating enough leads',
    'high-ad-costs': 'High ad costs, poor ROI',
    'no-strategy': 'No clear marketing strategy',
    'time-constraints': 'No time to manage content',
    'other': 'Other'
  };

  return labels[value] || value;
}
