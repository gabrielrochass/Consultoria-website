import subprocess
import threading
import os

def run_backend():
    print("Iniciando o servidor backend...")
    os.chdir("C:/Users/gabri/Portfólio/Consultoria-website/meu-projeto/backend")  # Muda para o diretório do frontend
    subprocess.run(["node", "server.js"])

def run_frontend():
    print("Iniciando o servidor frontend...")
    os.chdir("C:/Users/gabri/Portfólio/Consultoria-website/meu-projeto/frontend")  # Muda para o diretório do frontend
    subprocess.run(["npm", "start"])

if __name__ == "__main__":
    # Criação de threads para rodar backend e frontend em paralelo
    backend_thread = threading.Thread(target=run_backend)
    frontend_thread = threading.Thread(target=run_frontend)

    # Inicia as threads
    backend_thread.start()
    frontend_thread.start()

    # Aguarda as threads finalizarem
    backend_thread.join()
    frontend_thread.join()

<img src={require('../../assets/logo.png')} alt="Logo" />