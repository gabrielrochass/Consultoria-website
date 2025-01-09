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
              A [Nome da Empresa] é uma empresa de terceirização especializada em oferecer soluções eficientes e de qualidade
              em diversos setores. Com uma história de sucesso desde [ano de fundação], nos destacamos pelo compromisso com 
              a inovação, ética e responsabilidade social. Nosso time é formado por especialistas dedicados que garantem
              a excelência em cada projeto.
            </p>
            <p>
              Nosso objetivo é ser a principal escolha no mercado de terceirização, oferecendo serviços personalizados para
              atender às necessidades específicas de cada cliente. Valorizamos a transparência, o respeito e a satisfação do cliente.
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
