const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const sgMail = require('@sendgrid/mail');
require('dotenv').config(); 
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API);

// Diretório de uploads
const uploadDir = path.join(__dirname, "uploads");

// Verifica se o diretório de uploads existe, caso contrário, cria
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configuração do Multer para upload de arquivos (permitindo apenas 1 arquivo)
const upload = multer({ dest: "uploads/" }); // Diretório temporário para armazenar o arquivo

// Middleware de CORS para permitir requisições de outros domínios
app.use(cors());

// Middleware para lidar com dados JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Função para enviar e-mail com anexo via SendGrid (formulário de contato)
const sendEmail = (nome, email, mensagem, arquivo) => {
    const fileBuffer = fs.readFileSync(arquivo);

    const msg = {
        to: process.env.EMAIL_DESTINO, 
        from: process.env.MEU_EMAIL, 
        subject: 'Novo contato via formulário',
        text: `Você recebeu uma nova mensagem de ${nome} (${email}):\n\n${mensagem}`,
        attachments: [
            {
                filename: path.basename(arquivo), 
                content: fileBuffer.toString('base64'), 
                type: 'application/octet-stream',
                disposition: 'attachment', 
            }
        ],
    };

    sgMail.send(msg)
        .then(() => {
            console.log('E-mail de contato enviado com sucesso');
        })
        .catch((error) => {
            console.error('Erro ao enviar o e-mail de contato:', error);
        });
};

// Função para enviar e-mail de denúncia via SendGrid
const sendDenunciaEmail = (nome, email, assunto, descricao) => {
    const identificacao = nome || 'Anônimo';
    const emailRemetente = email || 'Não informado';

    const msg = {
        to: process.env.EMAIL_DESTINO, 
        from: process.env.MEU_EMAIL, 
        subject: `Nova Denúncia: ${assunto}`,
        text: `Você recebeu uma nova denúncia:\n\nIdentificação: ${identificacao}\nE-mail: ${emailRemetente}\nAssunto: ${assunto}\n\nDescrição:\n${descricao}`,
    };

    return sgMail.send(msg);
};

// Rota para envio do formulário e arquivo (contato)
app.post("/api/contact", upload.single("arquivo"), (req, res) => {
    console.log("Arquivo recebido:", req.file); 
    console.log("Dados do corpo:", req.body);  

    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem || !req.file) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const destinationPath = path.join(uploadDir, req.file.originalname);
    fs.renameSync(req.file.path, destinationPath);

    sendEmail(nome, email, mensagem, destinationPath);

    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
});

// Rota para envio de denúncias
app.post("/api/denuncia", async (req, res) => {
    console.log("Dados da denúncia recebidos:", req.body);  

    const { nome, email, assunto, descricao } = req.body;

    if (!assunto || !descricao) {
        return res.status(400).json({ error: "Assunto e descrição são obrigatórios." });
    }

    try {
        await sendDenunciaEmail(nome, email, assunto, descricao);
        console.log('E-mail de denúncia enviado com sucesso');
        res.status(200).json({ message: "Denúncia enviada com sucesso!" });
    } catch (error) {
        console.error('Erro ao enviar o e-mail de denúncia:', error);
        res.status(500).json({ error: "Erro interno ao enviar a denúncia." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`));
