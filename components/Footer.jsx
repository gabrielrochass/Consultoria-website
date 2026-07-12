import { FaInstagram, FaWhatsapp, FaAddressBook } from 'react-icons/fa';
import styles from './Footer.module.css';

const WHATSAPP =
  'https://api.whatsapp.com/send/?phone=55081986454808&text=Ol%C3%A1%21+Gostaria+de+conversar.&type=phone_number&app_absent=0';
const INSTAGRAM = 'https://www.instagram.com/smterceirizacaoeservicos/';
const LINKTREE = 'https://linktr.ee/smterceirizacaoeservicos';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <img
            className={styles.logo}
            src="/images/logo-noback.webp"
            alt="SM Terceirização e Serviços"
            loading="lazy"
            decoding="async"
          />
          <p>SM Terceirização e Serviços: Eficiência e qualidade para impulsionar o seu negócio.</p>
          <p>Entre em contato conosco para saber mais.</p>
        </div>

        <div className={styles.column}>
          <h4>Links Úteis</h4>
          <nav className={styles.links}>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <div className={styles.column}>
          <h4>Redes Sociais</h4>
          <nav className={styles.links}>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <FaInstagram aria-hidden="true" /> Instagram
            </a>
            <a href={LINKTREE} target="_blank" rel="noopener noreferrer">
              <FaAddressBook aria-hidden="true" /> Linktr.ee
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden="true" /> WhatsApp
            </a>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} SM Terceirização e Serviços Ltda. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
