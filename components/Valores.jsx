import { IoRocketOutline, IoDiamondOutline } from 'react-icons/io5';
import { GiEyeTarget } from 'react-icons/gi';
import styles from './Valores.module.css';

const items = [
  {
    key: 'missao',
    Icon: IoRocketOutline,
    title: 'Missão',
    text: 'Oferecer soluções de terceirização de alta qualidade, com foco na excelência dos serviços prestados, buscando sempre a satisfação plena de nossos clientes e contribuindo para a melhoria contínua de seus ambientes de trabalho.',
  },
  {
    key: 'visao',
    Icon: GiEyeTarget,
    title: 'Visão',
    text: 'Ser reconhecida como referência em soluções de terceirização, destacando-se pela qualidade, confiança e inovação nos serviços prestados, tornando-se a primeira escolha de empresas e condomínios que buscam excelência e eficiência.',
  },
  {
    key: 'valores',
    Icon: IoDiamondOutline,
    title: 'Valores',
    text: 'Qualidade, transparência, responsabilidade e sustentabilidade. Comprometemo-nos a entregar serviços de excelência, mantendo uma comunicação clara com nossos clientes, assumindo desafios com seriedade e agindo sempre com respeito ao meio ambiente.',
  },
];

export default function Valores() {
  return (
    <div id="valores" className={styles.container}>
      <h2 className={styles.title}>Missão, Visão e Valores</h2>
      <p className={styles.description}>
        Fornecemos soluções de alta qualidade para atender às suas necessidades, com inovação e
        compromisso social.
      </p>
      <div className={styles.grid}>
        {items.map(({ key, Icon, title, text }, i) => (
          <article key={key} className={styles.item} data-aos="fade-up" data-aos-delay={i * 120}>
            <div className={`${styles.circle} ${styles[key]}`}>
              <Icon aria-hidden="true" />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
