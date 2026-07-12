import styles from './Sobre.module.css';

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Sobre Nós</h2>
          <p>
            A SM Terceirização e Serviços Ltda. é uma empresa inovadora no mercado, especializada
            na prestação de serviços de terceirização nos diversos seguimentos. Com um compromisso
            sólido com a qualidade e eficiência, buscamos soluções práticas e acessíveis para
            atender às necessidades de nossos clientes, garantindo um ambiente mais organizado,
            produtivo e seguro.
          </p>
          <p>
            <em>
              <strong>Entendemos que cada cliente tem necessidades únicas.</strong>
            </em>{' '}
            Nossa experiência e flexibilidade nos permitem adaptar nossos serviços, proporcionando
            um atendimento personalizado. Trabalhamos com uma equipe qualificada e comprometida,
            pronta para oferecer as melhores soluções em terceirização, seja no setor industrial,
            comercial, hospitalar ou na gestão de serviços para condomínios.
          </p>
          <a href="#contato" className={styles.button}>
            Descubra Mais
          </a>
        </div>
        <div className={styles.image}>
          <img src="/images/sobre2.webp" alt="Equipe SM Terceirização" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
