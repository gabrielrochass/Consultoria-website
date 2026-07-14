'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar({ onOpenDenuncia }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <a href="#home" className={styles.logo} onClick={close}>
          <img src="/images/logo-noback.webp" alt="SM Terceirização e Serviços" />
        </a>
        <button
          type="button"
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={close}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            className={styles.denunciaLink}
            onClick={() => {
              onOpenDenuncia();
              close();
            }}
          >
            Canal de Denúncias
          </button>
        </li>
      </ul>
    </nav>
  );
}
