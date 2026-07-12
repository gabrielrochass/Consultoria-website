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
  const assunto = field(body.assunto, 200);
  const descricao = field(body.descricao, 5000);

  if (!assunto || !descricao) {
    return NextResponse.json({ error: 'Assunto e descrição são obrigatórios.' }, { status: 400 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 });
  }

  try {
    await sendMail({
      to: process.env.MAIL_TO_DENUNCIA,
      subject: `Nova Denúncia: ${assunto}`,
      replyTo: email || undefined,
      text:
        `Nova denúncia recebida:\n\n` +
        `Identificação: ${nome || 'Anônimo'}\n` +
        `E-mail: ${email || 'Não informado'}\n` +
        `Assunto: ${assunto}\n\n` +
        `Descrição:\n${descricao}`,
    });
    return NextResponse.json({ message: 'Denúncia enviada com sucesso!' });
  } catch (err) {
    console.error('Erro ao enviar denúncia:', err);
    return NextResponse.json({ error: 'Erro interno ao enviar a denúncia.' }, { status: 500 });
  }
}
