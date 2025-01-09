import React from 'react';
import './sobre.css'; // Arquivo CSS atualizado para estilização

const sobre = () => {
  return (
    <section id='sobre' className="sobre-nos">
      <div className="container">
        <div className="content">
          {/* Texto sobre a empresa */}
          <div className="text-content">
            <h2>Sobre Nós</h2>
            <p>
              A SM Terceirização e Serviços Ltda. é uma empresa inovadora no mercado, especializada na prestação de serviços de terceirização nos diversos seguimentos. Com um compromisso sólido com a qualidade e eficiência, buscamos soluções práticas e acessíveis para atender às necessidades de nossos clientes, garantindo um ambiente mais organizado, produtivo e seguro.
            </p>
            <p>
              Entendemos que cada cliente tem necessidades únicas. Nossa experiência e flexibilidade nos permitem adaptar nossos serviços, proporcionando um atendimento personalizado. Trabalhamos com uma equipe qualificada e comprometida, pronta para oferecer as melhores soluções em terceirização, seja no setor industrial, comercial, hospitalar ou na gestão de serviços para condomínios.
            </p>
            <p>
              <em>Visite-nos e descubra como podemos transformar seu ambiente!</em>
            </p>
          </div>

          {/* Imagem ao lado direito */}
          <div className="image-content">
            <img src={require('../../assets/sobre2.png')} alt="Sobre Nós" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default sobre;
