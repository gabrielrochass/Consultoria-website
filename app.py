from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__)

# Configurações do Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'gabrielrsilva203@gmail.com'  # Insira seu e-mail aqui
app.config['MAIL_PASSWORD'] = 'Rochagabriel2003'  # Insira sua senha aqui

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        mensagem = request.form['mensagem']

        # Enviar e-mail
        msg = Message('Nova mensagem de contato', sender='gabrielrsilva203@gmail.com', recipients=['smterceirizacaoeservicos@gmail.com'])
        msg.body = f"Nome: {nome}\nE-mail: {email}\nMensagem: {mensagem}"
        mail.send(msg)

        return 'Mensagem enviada com sucesso!'

if __name__ == '__main__':
    app.run(debug=True)

