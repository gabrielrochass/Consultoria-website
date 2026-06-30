import React, { useState } from "react";
import './denuncia.css';

const DenunciaModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        descricao: ''
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
            const response = await fetch('http://localhost:5000/api/denuncia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Denúncia enviada com sucesso!');
                setFormData({ nome: '', email: '', assunto: '', descricao: '' });
                setTimeout(() => {
                    onClose();
                    setStatus('');
                }, 2000);
            } else {
                const errorResponse = await response.json();
                setStatus(`Erro ao enviar a denúncia: ${errorResponse.error}`);
            }
        } catch (error) {
            console.error(error);
            setStatus('Erro ao enviar a denúncia. Verifique sua conexão.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="denuncia-modal-overlay" onClick={onClose}>
            <div className="denuncia-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="denuncia-close-btn" onClick={onClose}>&times;</button>
                <h2>Canal de Denúncias</h2>
                <form onSubmit={handleSubmit}>
                    <div className="denuncia-form-group">
                        <label htmlFor="nome">Nome (opcional)</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Seu nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="denuncia-form-group">
                        <label htmlFor="email">E-mail (opcional)</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Seu email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="denuncia-form-group">
                        <label htmlFor="assunto">Assunto (obrigatório)</label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            placeholder="Assunto da denúncia"
                            value={formData.assunto}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="denuncia-form-group">
                        <label htmlFor="descricao">Descrição (obrigatório)</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            rows="5"
                            placeholder="Descreva a denúncia..."
                            value={formData.descricao}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="denuncia-btn-enviar">Enviar Denúncia</button>
                </form>
                {status && <p className="denuncia-status">{status}</p>}
            </div>
        </div>
    );
};

export default DenunciaModal;
