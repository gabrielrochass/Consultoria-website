# SM Terceirização e Serviços — Site institucional

Site em **Next.js (App Router)**, **100% estático**, deploy em **Vercel**. Os formulários
(contato e canal de denúncias) montam a mensagem e abrem o **WhatsApp** da empresa — sem
backend, sem banco, sem variáveis de ambiente.

## Stack

- Next.js 14 (App Router) + React 18
- CSS Modules + design tokens (`app/globals.css`)
- `next/font` (Poppins nos títulos + Montserrat no corpo)
- react-icons, AOS (animações de scroll)

## Rodar localmente

```bash
npm install
npm run dev    # http://localhost:3000
```

Não há variáveis de ambiente — o site é estático.

## Formulários

Contato e Canal de Denúncias montam um texto com os campos preenchidos e abrem
`https://wa.me/55081986454808?text=...` numa nova aba. O número fica centralizado em
`lib/whatsapp.js`.

## Estrutura

```
app/            layout, page (home), globals.css
components/     seções (Navbar, Hero, Sobre, Valores, Servicos, Contato, Footer, DenunciaModal...)
lib/whatsapp.js helper do link do WhatsApp
public/images/  imagens .webp
```

## Deploy (Vercel + domínio)

1. **Vercel:** importar este repositório (framework Next.js detectado automaticamente) → deploy.
   Não precisa configurar nenhuma variável de ambiente.
2. **Domínio:** em Vercel → Settings → Domains, adicionar `smterceirizacaoeservicos.com` e `www`.
   No DNS da Hostinger, apontar `A @ → 76.76.21.21` e `CNAME www → cname.vercel-dns.com`
   (ou o que a Vercel indicar).
3. Cada `git push` na branch de produção dispara deploy automático.
