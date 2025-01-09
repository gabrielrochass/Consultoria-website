const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require('dotenv').config();

// Configuração da API do SendGrid
sgMail.setApiKey(process.env.SENDGRID_API);

const app = express();
app.use(express.json());
app.use(cors()); 

// Função para enviar e-mails
async function sendEmail(to, subject, text, html) {
    const msg = {
        to, // Email do destinatário
        from: process.env.MEU_EMAIL,
        subject, // Assunto do email
        text, // Texto do email
        html, // Conteúdo HTML
    };

    if (!process.env.MEU_EMAIL) {
        throw new Error('O email remetente não está configurado no arquivo .env');
    }

    try {
        await sgMail.send(msg);
        console.log('Email enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar email:', error.response ? error.response.body.errors : error.message);
        throw new Error('Erro ao enviar email');
    }
}

// Validação de email
function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Endpoint para envio de mensagens do formulário
app.post('/api/contact', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    if (!isEmailValid(email)) {
        return res.status(400).json({ error: 'Email inválido' });
    }

    const assunto = `Nova mensagem de ${nome}`;
    const conteudoHtml = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
    `;

    try {
        await sendEmail(
            process.env.EMAIL_DESTINO,
            assunto,
            mensagem,
            conteudoHtml
        );
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao enviar mensagem: ' + error.message });
    }
});

// Middleware para erros não tratados
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu um erro no servidor' });
});

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
