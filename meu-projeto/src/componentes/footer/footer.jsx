import React from 'react';
import './footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={require('../../assets/logo-noback.png')} alt="Logo" />
          </div>
          <div className="footer-info">
            <p>SM Terceirização e Serviços: Eficiência e qualidade para impulsionar o seu negócio.</p>
            <p><br />Entre em contato conosco para saber mais.</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Úteis</h4>
          <div className="footer-links">
            <a href="#sobre" onClick={() => scrollToSection('sobre')}>Sobre</a>
            <a href="#servicos" onClick={() => scrollToSection('servicos')}>Serviços</a>
            <a href="#contato" onClick={() => scrollToSection('contato')}>Contato</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
              <a href="https://www.instagram.com/smterceirizacaoeservicos/" target="_blank" rel="noopener noreferrer">
                  Instagram
              </a>
              <a href="https://linktr.ee/smterceirizacaoeservicos?fbclid=PAZXh0bgNhZW0CMTEAAaab35ZGr9F8TNxebnEHPYXw7v3HUm7nl_GDgv1HqJMQ10TLCLux18064eY_aem_21WbHs4hRglqjYBmAnZXyA" target="_blank" rel="noopener noreferrer">
                  Linktr.ee
              </a>
          </div> 
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SM Terceirização e Serviços Ltda. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
