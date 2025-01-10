const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const sgMail = require('@sendgrid/mail');
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env
const app = express();

// Defina sua chave de API do SendGrid e outros dados a partir das variáveis de ambiente
sgMail.setApiKey(process.env.SENDGRID_API);

// Diretório de uploads
const uploadDir = path.join(__dirname, "uploads");

// Verifica se o diretório de uploads existe, caso contrário, cria
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configuração do Multer para upload de arquivos
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
        to: process.env.EMAIL_DESTINO, // E-mail do destinatário
        from: process.env.MEU_EMAIL, // E-mail de envio
        subject: 'Novo contato via formulário',
        text: `Você recebeu uma nova mensagem de ${nome} (${email}):\n\n${mensagem}`,
        attachments: [
            {
                filename: path.basename(arquivo), // Nome do arquivo
                content: fileBuffer.toString('base64'), // Conteúdo do arquivo em base64
                type: 'application/octet-stream', // Tipo de conteúdo do arquivo
                disposition: 'attachment', // Como o arquivo será tratado (anexo)
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
    console.log("Arquivo recebido:", req.file); // Exibe informações sobre o arquivo recebido
    console.log("Dados do corpo:", req.body);  // Exibe os dados do formulário (nome, email, mensagem)

    const { nome, email, mensagem } = req.body;

    // Validação: Verifica se todos os campos necessários foram enviados
    if (!nome || !email || !mensagem || !req.file) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    // Caminho do arquivo que foi carregado
    const destinationPath = path.join(uploadDir, req.file.originalname);
    fs.renameSync(req.file.path, destinationPath);

    // Enviar o e-mail com os dados e o arquivo anexo
    sendEmail(nome, email, mensagem, destinationPath);

    // Resposta de sucesso
    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
});

// Inicia o servidor na porta 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
