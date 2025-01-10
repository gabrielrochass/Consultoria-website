import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './contato.css';

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Armazena o arquivo selecionado
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');
    
        const form = new FormData();
        form.append("nome", formData.nome);
        form.append("email", formData.email);
        form.append("mensagem", formData.mensagem);
        if (file) {
            form.append("arquivo", file);
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                body: form,
            });
    
            if (response.ok) {
                setStatus('Mensagem enviada com sucesso!');
                setFormData({ nome: '', email: '', mensagem: '' });
                setFile(null);
            } else {
                const errorResponse = await response.json();
                setStatus(`Erro ao enviar a mensagem: ${errorResponse.error}`);
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
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    <div className="form-group">
                        <label htmlFor="arquivo">Anexar Arquivo</label>
                        <input
                            type="file"
                            id="arquivo"
                            name="arquivo"
                            onChange={handleFileChange}
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
