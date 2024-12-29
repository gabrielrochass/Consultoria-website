import subprocess
import threading
# import os

def run_backend():
    try:
        print("Iniciando o servidor backend...")
        subprocess.run(["node", "server.js"], check=True, cwd="C:/Users/gabri/Portfólio/Consultoria-website/meu-projeto/backend")
    except subprocess.CalledProcessError as e:
        print(f"Erro ao iniciar o backend: {e}")

def run_frontend():
    try:
        print("Iniciando o servidor frontend...")
        subprocess.run(["npm", "start"], check=True, cwd="C:/Users/gabri/Portfólio/Consultoria-website/meu-projeto")
    except subprocess.CalledProcessError as e:
        print(f"Erro ao iniciar o frontend: {e}")

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
