**ESTRUTURA DOS FOLDERS DO PROJETO**

- folder meu-projeto = frontend
- node_modules não precisa mexer
- public: contém somente a raíz do projeto em index.html
- src/assets: guarda iamgens, fontes, ícones...
- src/componentes: separa os componentes utilizados ao longo da página de gorma mais sistemática como navbar, footer, entre outros
- src/pages: contém as páginas (se tiver mais de uma) que serão acessadas por meio de botões na tela. É onde estarão os componentes react organizados entre si
- app.js: rotas das páginas utilizadas em pages
- index.js: só coloca o app.js na raíz criada. Não precisa mexer
- style.css: css global