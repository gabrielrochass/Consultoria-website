const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

console.log('MONGO_URI:', process.env.MONGO_URI);


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error('Erro: MONGO_URI não está definido.');
    process.exit(1); // Encerra o processo se a URI estiver ausente
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));


const messageSchema = new mongoose.Schema({
    nome: String,
    email: String,
    mensagem: String,
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

app.post('/api/contact', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
        const newMessage = new Message({ nome, email, mensagem });
        await newMessage.save();
        res.status(200).json({ message: 'Mensagem salva com sucesso!' });
    } catch (error) {
        console.error('Erro ao salvar mensagem:', error);
        res.status(500).json({ error: 'Erro ao salvar mensagem: ' + error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
