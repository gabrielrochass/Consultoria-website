import { NextResponse } from 'next/server';
import { sendMail, field, EMAIL_RE } from '@/lib/mailer';

export const runtime = 'nodejs';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 });
  }

  const nome = field(body.nome, 200);
  const email = field(body.email, 200);
  const mensagem = field(body.mensagem, 5000);

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 });
  }

  try {
    await sendMail({
      to: process.env.MAIL_TO_CONTATO,
      subject: `Nova mensagem de contato — ${nome}`,
      replyTo: email,
      text:
        `Nova mensagem pelo site:\n\n` +
        `Nome: ${nome}\n` +
        `E-mail: ${email}\n\n` +
        `Mensagem:\n${mensagem}`,
    });
    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' });
  } catch (err) {
    console.error('Erro ao enviar contato:', err);
    return NextResponse.json({ error: 'Erro interno ao enviar a mensagem.' }, { status: 500 });
  }
}
