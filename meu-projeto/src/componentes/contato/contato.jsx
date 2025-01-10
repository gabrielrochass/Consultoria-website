import React, { useState } from "react";
import { FaAddressBook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
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

    const handleFileChange = (event) => {
        const fileInput = event.target;
        const fileNameDisplay = document.getElementById('file-name');
    
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
    
            // Atualiza o nome do arquivo no display
            fileNameDisplay.textContent = `Arquivo Selecionado: ${fileName}`;
    
            // Modifica o botão para indicar que o arquivo foi carregado
            const label = document.querySelector('label[for="arquivo"]');
            label.classList.add('file-uploaded'); // Aplica a classe de "upload concluído"
        }
        setFile(event.target.files[0]); // Armazena o arquivo selecionado
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
        <div id="contato" className="contato-container">
            <div className="contato-left">
                <h1>Entre em Contato</h1>
                <p>
                    Estamos aqui para ajudar! Conecte-se conosco através das redes sociais ou preencha o formulário ao lado para nos enviar uma mensagem.
                </p>
                <div className="social-links">
                    <a href="https://www.instagram.com/smterceirizacaoeservicos/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="https://linktr.ee/smterceirizacaoeservicos?fbclid=PAZXh0bgNhZW0CMTEAAaZwQ3_xRpk4LO9hHFTfz5g1GATpFGsIwrf3GBA5SmtxHCFQIAYk7yByI80_aem_K6HvOLNJCG1ms5WQXXSx0w" target="_blank" rel="noopener noreferrer">
                        <FaAddressBook /> Linktr.ee
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=55081986454808&text=Ol%C3%A1%21+Gostaria+de+conversar.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp /> WhatsApp
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
                        <label htmlFor="arquivo" class="custom-label">Anexar Currículo ou Proposta</label>
                        <input
                            type="file"
                            id="arquivo"
                            name="arquivo"
                            onChange={handleFileChange}
                            class="custom-input-file"
                        />
                        <span id="file-name" class="file-name"></span>
                    </div>
                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
};

export default Contato;
