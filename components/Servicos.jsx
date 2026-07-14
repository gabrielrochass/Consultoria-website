import styles from './Servicos.module.css';

const servicos = [
  {
    img: '/images/copa.webp',
    focal: 'center 30%',
    alt: 'Equipe de copa e cozinha da SM Terceirização',
    title: 'Copa e Cozinha',
    text: 'Preparo e distribuição de refeições com higiene, organização e pontualidade — cuidamos da copa, cozinha e do apoio à nutrição em hospitais, empresas e instituições.',
  },
  {
    img: '/images/limp_predial.webp',
    focal: 'center 22%',
    alt: 'Limpeza Predial',
    title: 'Limpeza Predial',
    text: 'Oferecemos serviços de limpeza e conservação para ambientes comerciais, industriais, e condomínios, com métodos eficazes e produtos de qualidade.',
  },
  {
    img: '/images/porteiro.webp',
    focal: 'center 28%',
    alt: 'Portaria',
    title: 'Portaria',
    text: 'Controle de acesso e organização de entradas e saídas de forma ágil e segura, com porteiros qualificados para garantir a ordem e o bom funcionamento do seu condomínio ou empresa.',
  },
  {
    img: '/images/flebotomista.webp',
    focal: 'center 25%',
    alt: 'Flebotomista',
    title: 'Flebotomista',
    text: 'Profissionais capacitados na coleta de material biológico, com técnica, segurança e cuidado com o paciente, seguindo rigorosos protocolos de biossegurança.',
  },
  {
    img: '/images/limpeza-hosp.webp',
    focal: 'center 30%',
    alt: 'Limpeza Hospitalar',
    title: 'Limpeza Hospitalar',
    text: 'Garantimos um ambiente seguro e livre de contaminações em hospitais e clínicas, seguindo protocolos rigorosos de higiene para a segurança de pacientes e profissionais de saúde.',
  },
  {
    img: '/images/esp2.webp',
    focal: 'center',
    alt: 'Serviços Especializados',
    title: 'Serviços Especializados',
    text: 'Oferecemos serviços especializados como apoio técnico, assessoria, coordenadoria, manutenção predial e outros serviços personalizados para garantir a excelência no funcionamento da sua empresa.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className={styles.section}>
      <h2 className={styles.heading}>Nossos Serviços</h2>
      <div className={styles.grid}>
        {servicos.map((s, i) => (
          <article
            key={s.title}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 100}
          >
            <div className={styles.imgBox}>
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: s.focal }}
              />
            </div>
            <div className={styles.content}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
