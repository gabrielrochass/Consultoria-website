'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Galeria.module.css';

const fotos = [
  { src: '/images/galeria1.webp', alt: 'Equipe da SM Terceirização reunida' },
  { src: '/images/galeria2.webp', alt: 'Equipe da SM Terceirização' },
  { src: '/images/galeria3.webp', alt: 'Homenagem de Dia das Mães da SM Terceirização' },
  { src: '/images/galeria4.webp', alt: 'Equipe da SM em confraternização' },
];

export default function Galeria() {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + fotos.length) % fotos.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % fotos.length), []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, prev, next]);

  return (
    <section id="galeria" className={styles.section}>
      <h2 className={styles.heading}>Galeria de Fotos</h2>
      <p className={styles.subtitle}>Momentos e o dia a dia da nossa equipe.</p>

      <div className={styles.grid}>
        {fotos.map((f, i) => (
          <button
            type="button"
            key={f.src}
            className={styles.item}
            onClick={() => setIndex(i)}
            data-aos="fade-up"
            data-aos-delay={(i % 4) * 90}
            aria-label={`Ampliar foto: ${f.alt}`}
          >
            <img src={f.src} alt={f.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {open && (
        <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true">
          <button type="button" className={styles.close} onClick={close} aria-label="Fechar">
            &times;
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prev}`}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Foto anterior"
          >
            &#8249;
          </button>
          <img
            className={styles.lightImg}
            src={fotos[index].src}
            alt={fotos[index].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className={`${styles.navBtn} ${styles.next}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima foto"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
