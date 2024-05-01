from flask import Flask, request, jsonify
import smtplib
from email.message import EmailMessage

app = Flask(__name__)

@app.route('/send_message', methods=['POST'])
def send_message():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Configure o servidor SMTP
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    smtp_user = 'gabrielrsilva203@gmail.com'
    smtp_password = 'Rochagabriel'

    try:
        # Configura a mensagem de e-mail
        msg = EmailMessage()
        msg.set_content(f'Nome: {name}\nEmail: {email}\nMensagem: {message}')
        msg['Subject'] = 'Nova mensagem do formulário de contato'
        msg['From'] = smtp_user
        msg['To'] = 'smterceirizacaoeservicoes@gmail.com'

        # Conecta-se ao servidor SMTP e envia o e-mail
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

        return jsonify({'success': True}), 200
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
