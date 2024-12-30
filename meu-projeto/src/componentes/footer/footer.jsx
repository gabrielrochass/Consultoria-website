import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo e Informações */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={require('../../assets/logo-noback.png')} alt="Logo" />
          </div>
          <div className="footer-info">
            <p>A SM Terceirização e Serviços Ltda. é comprometida em oferecer as melhores soluções.</p>
            <p><br />Entre em contato conosco para saber mais.</p>
          </div>
        </div>

        {/* Links Úteis */}
        <div className="footer-section">
          <h4>Links Úteis</h4>
          <div className="footer-links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
            <a href="#termos">Termos e Condições</a>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i> LinkedIn
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
