import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './contato.css';

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const response = await fetch('http://localhost:5000/api/contact', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Mensagem enviada com sucesso!');
                setFormData({ nome: '', email: '', mensagem: '' });
            } else {
                setStatus('Erro ao enviar a mensagem.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Erro ao enviar a mensagem. Verifique sua conexão.');
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Seu nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Seu email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="5"
                            placeholder="Escreva sua mensagem..."
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
};

export default Contato;