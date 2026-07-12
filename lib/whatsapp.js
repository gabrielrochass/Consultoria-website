export const WHATSAPP_PHONE = '55081986454808';

export function buildWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
