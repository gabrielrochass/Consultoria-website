import styles from './Servicos.module.css';

const servicos = [
  {
    img: '/images/solange3.webp',
    alt: 'Consultoria em gestão empresarial',
    title: 'Consultoria em Gestão de Contratos',
    text: 'Assessoria especializada na gestão de contratos, incluindo elaboração, controle, repactuação, reajuste e renovação, otimizando os resultados para sua empresa.',
  },
  {
    img: '/images/limp_predial.webp',
    alt: 'Limpeza Predial',
    title: 'Limpeza Predial',
    text: 'Oferecemos serviços de limpeza e conservação para ambientes comerciais, industriais, e condomínios, com métodos eficazes e produtos de qualidade.',
  },
  {
    img: '/images/portaria.webp',
    alt: 'Portaria',
    title: 'Portaria',
    text: 'Controle de acesso e organização de entradas e saídas de forma ágil e segura, com porteiros qualificados para garantir a ordem e o bom funcionamento do seu condomínio ou empresa.',
  },
  {
    img: '/images/porteiro.webp',
    alt: 'Recepção',
    title: 'Recepção',
    text: 'Oferecemos um atendimento de qualidade aos seus clientes e visitantes com nossa equipe de recepcionistas, que cuidam da recepção, telefonia e organização de agendas com eficiência e cordialidade.',
  },
  {
    img: '/images/hosp.webp',
    alt: 'Limpeza Hospitalar',
    title: 'Limpeza Hospitalar',
    text: 'Garantimos um ambiente seguro e livre de contaminações em hospitais e clínicas, seguindo protocolos rigorosos de higiene para a segurança de pacientes e profissionais de saúde.',
  },
  {
    img: '/images/esp2.webp',
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
              <img src={s.img} alt={s.alt} loading="lazy" decoding="async" />
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
