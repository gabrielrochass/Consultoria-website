const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para receber os dados do formulário
app.post('/api/contact', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL_USER,
                clientId: process.env.GMAIL_CLIENT_ID,
                clientSecret: process.env.GMAIL_CLIENT_SECRET,
                refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            },
        });
    
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'destinatario@example.com',
            subject: `Mensagem de ${nome}`,
            text: mensagem,
        };
    
        const info = await transporter.sendMail(mailOptions);
        console.log('Email enviado:', info);
        res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ error: 'Erro ao enviar email: ' + error.message });
    }    
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});