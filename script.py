import subprocess
import threading
import os

# Obtém o diretório atual do script
script_dir = os.path.dirname(os.path.abspath(__file__))

def run_backend():
    try:
        backend_path = os.path.join(script_dir, "meu-projeto", "backend")
        print("Iniciando o servidor backend...\n")
        subprocess.run(["node", "server.js"], check=True, cwd=backend_path)
        print("Servidor backend rodando.")
    except subprocess.CalledProcessError as e:
        print(f"Erro ao iniciar o backend: {e}")

def run_frontend():
    try:
        frontend_path = os.path.join(script_dir, "meu-projeto")
        print("Iniciando o servidor frontend...\n")
        subprocess.run(["npm.cmd", "start"], check=True, cwd=frontend_path)
        print("Servidor frontend rodando.")
    except subprocess.CalledProcessError as e:
        print(f"Erro ao iniciar o frontend: {e}")

if __name__ == "__main__":
    backend_thread = threading.Thread(target=run_backend)
    frontend_thread = threading.Thread(target=run_frontend)

    backend_thread.start()
    frontend_thread.start()

    backend_thread.join()
    frontend_thread.join()
