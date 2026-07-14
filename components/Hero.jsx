'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    image: '/images/banner.webp',
    focal: 'center',
    focalMobile: '88% center',
    title: 'Soluções Eficientes para o seu Negócio',
    description:
      'Oferecemos serviços terceirizados com excelência, agilidade e a confiança que sua empresa merece. Soluções personalizadas em terceirização de mão de obra e consultoria empresarial podem elevar o desempenho do seu negócio.',
  },
  {
    id: 2,
    image: '/images/capa2.webp',
    focal: 'center',
    focalMobile: 'center',
    title: 'Equipe Especializada',
    description:
      'Contamos com profissionais capacitados e comprometidos em oferecer soluções de alta qualidade. Com treinamento constante e foco em eficiência, nossa equipe está preparada para atender às suas necessidades.',
  },
  {
    id: 3,
    image: '/images/seguranca2.webp',
    focal: 'center',
    focalMobile: '85% center',
    title: 'Segurança e Bem-estar no seu Ambiente de Trabalho',
    description:
      'Com a SM Terceirização e Serviços, você tem a confiança de que sua equipe está sendo cuidada em todos os aspectos, com soluções personalizadas para garantir a segurança, o bem-estar e a proteção do colaborador no ambiente de trabalho.',
  },
  {
    id: 4,
    image: '/images/resp.webp',
    focal: 'center',
    focalMobile: '68% center',
    title: 'Responsabilidade Social',
    description:
      'Estamos focados em adotar práticas que promovam o bem-estar das pessoas e a sustentabilidade, valorizando nossos colaboradores e o ambiente.',
  },
  {
    id: 5,
    image: '/images/capa4.webp',
    focal: 'center',
    focalMobile: '80% center',
    title: 'Consultoria em Gestão de Contratos',
    description:
      'Nossos consultores garantem a gestão eficiente, cumprimento de prazos e conformidade legal em cada etapa do processo, desde a elaboração até a renovação.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(() => new Set([0]));

  useEffect(() => {
    setLoaded((prev) => {
      if (prev.has(current)) return prev;
      const next = new Set(prev);
      next.add(current);
      return next;
    });
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const go = (i) => setCurrent((i + slides.length) % slides.length);

  return (
    <section id="home" className={styles.slider}>
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
          style={
            loaded.has(i)
              ? {
                  backgroundImage: `url(${slide.image})`,
                  '--focal': slide.focal,
                  '--focal-m': slide.focalMobile,
                }
              : undefined
          }
        >
          {i === current && (
            <div className={styles.content}>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        onClick={() => go(current - 1)}
        aria-label="Slide anterior"
      >
        &#8249;
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={() => go(current + 1)}
        aria-label="Próximo slide"
      >
        &#8250;
      </button>

      <div className={styles.indicators}>
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => go(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
