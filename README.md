# SM Terceirização e Serviços — Site institucional

Site em **Next.js (App Router)**, deploy em **Vercel**. Formulários (contato e canal de
denúncias) funcionam via **API routes serverless** com **Resend** — sem backend separado.

## Stack

- Next.js 14 (App Router) + React 18
- CSS Modules + design tokens (`app/globals.css`)
- `next/font` (Playfair Display + Montserrat)
- react-icons, AOS (animações de scroll)
- Resend (envio de e-mail dos formulários)

## Rodar localmente

```bash
npm install
cp .env.example .env.local   # preencha as chaves
npm run dev                   # http://localhost:3000
```

### Variáveis de ambiente (`.env.local` e Vercel)

| Var | Descrição |
|-----|-----------|
| `RESEND_API_KEY` | Chave da API do [Resend](https://resend.com) |
| `MAIL_FROM` | Remetente verificado, ex: `SM Terceirização <contato@smterceirizacaoeservicos.com>` |
| `MAIL_TO_DENUNCIA` | E-mail que recebe as denúncias |
| `MAIL_TO_CONTATO` | E-mail que recebe as mensagens de contato |

## Estrutura

```
app/            layout, page (home), globals.css, api/{denuncia,contato}
components/     seções (Navbar, Hero, Sobre, Valores, Servicos, Contato, Footer, DenunciaModal...)
lib/mailer.js   helper do Resend
public/images/  imagens .webp
```

## Deploy (Vercel + domínio)

1. **Resend:** criar conta → verificar o domínio `smterceirizacaoeservicos.com` (adicionar os
   registros DNS no painel da Hostinger) → copiar a `RESEND_API_KEY`.
2. **Vercel:** importar este repositório (framework Next.js detectado automaticamente) →
   configurar as env vars acima → deploy.
3. **Domínio:** em Vercel → Settings → Domains, adicionar `smterceirizacaoeservicos.com` e `www`.
   No DNS da Hostinger, apontar `A @ → 76.76.21.21` e `CNAME www → cname.vercel-dns.com`
   (ou o que a Vercel indicar).
4. Pronto: cada `git push` na branch de produção dispara deploy automático.
