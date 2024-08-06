from flask import Flask, render_template, request
import os
from werkzeug.utils import secure_filename
from flask_mail import Mail, Message

app = Flask(__name__)

# Configurações para o Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'seu_email@gmail.com'  # Seu email aqui
app.config['MAIL_PASSWORD'] = 'sua_senha'  # Sua senha aqui
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'Nenhum arquivo enviado'
    
    file = request.files['file']
    
    if file.filename == '':
        return 'Nome do arquivo vazio'
    
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
        # Verifica qual botão foi clicado
        submit_button = request.form['submit']
        if submit_button == 'curriculo':
            send_email('smterceirizacaoeservicos@gmail.com', filename)
        elif submit_button == 'proposta':
            send_email('rhsmterceirizacaoeservicos@gmail.com', filename)
        
        return 'Arquivo enviado com sucesso'

def send_email(recipient, filename):
    msg = Message('Novo arquivo recebido',
                  sender='seu_email@gmail.com',
                  recipients=[recipient])
    msg.body = 'Um novo arquivo foi enviado.'
    with app.open_resource(os.path.join(app.config['UPLOAD_FOLDER'], filename)) as fp:
        msg.attach(filename, 'application/octet-stream', fp.read())
    mail.send(msg)

if __name__ == '__main__':
    app.run(debug=True)
