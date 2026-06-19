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

// Middleware para lidar com dados de formulários (não JSON), pois usaremos 'form-data'
app.use(express.urlencoded({ extended: true }));

// Função para enviar e-mail com anexo via SendGrid
const sendEmail = (nome, email, mensagem, arquivo) => {
    // Lê o arquivo como um buffer
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
            console.log('E-mail enviado com sucesso');
        })
        .catch((error) => {
            console.error('Erro ao enviar o e-mail:', error);
        });
};

// Rota para envio do formulário e arquivo
app.post("/api/contact", upload.single("arquivo"), (req, res) => {
    console.log("Arquivo recebido:", req.file); 
    console.log("Dados do corpo:", req.body);  

    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem || !req.file) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    // Caminho do arquivo que foi carregado
    const destinationPath = path.join(uploadDir, req.file.originalname);
    fs.renameSync(req.file.path, destinationPath);

    sendEmail(nome, email, mensagem, destinationPath);

    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`));
