import { Playfair_Display, Montserrat } from 'next/font/google';
import AosInit from '@/components/AosInit';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://smterceirizacaoeservicos.com'),
  title: 'SM Terceirização e Serviços Ltda',
  description:
    'Soluções em terceirização de mão de obra e consultoria empresarial: limpeza predial e hospitalar, portaria, recepção, gestão de contratos e serviços especializados.',
  keywords: [
    'terceirização',
    'limpeza predial',
    'limpeza hospitalar',
    'portaria',
    'recepção',
    'consultoria',
    'SM Terceirização',
  ],
  openGraph: {
    title: 'SM Terceirização e Serviços Ltda',
    description:
      'Soluções em terceirização com excelência, agilidade e confiança para sua empresa ou condomínio.',
    url: 'https://smterceirizacaoeservicos.com',
    siteName: 'SM Terceirização e Serviços',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
