import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './contato.css';

const Contato = () => {
    return (
        <div className="contato-container">
            <div className="contato-left">
                <h1>Entre em Contato</h1>
                <p>
                    Estamos aqui para ajudar! Conecte-se conosco através das redes sociais ou preencha o formulário ao lado para nos enviar uma mensagem.
                </p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook /> Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter /> Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>
            </div>
            <div className="contato-right">
                <h2>Envie sua Mensagem</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Seu email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem..." required></textarea>
                    </div>
                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contato;
