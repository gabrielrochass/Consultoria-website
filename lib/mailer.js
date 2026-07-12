import { Resend } from 'resend';

let client;

function getResend() {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function field(value, max) {
  return (value ?? '').toString().trim().slice(0, max);
}

export async function sendMail({ to, subject, text, replyTo }) {
  return getResend().emails.send({
    from: process.env.MAIL_FROM,
    to,
    subject,
    text,
    ...(replyTo ? { replyTo } : {}),
  });
}
