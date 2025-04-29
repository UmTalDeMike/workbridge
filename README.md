# Protótipo Desktop Funcional - WorkBridge

Este diretório contém os arquivos para o protótipo funcional da versão desktop do site WorkBridge.

## Estrutura de Arquivos

- `index.html`: Arquivo principal que contém a estrutura base (sidebar, header, área de conteúdo) e o script de navegação.
- `style.css`: Folha de estilos principal com a identidade visual e layout desktop.
- `home.html`: Conteúdo da página inicial.
- `simulations.html`: Conteúdo da página do Laboratório de Simulações.
- `mentorship.html`: Conteúdo da página de Mentoria e Comunidade.
- `certification.html`: Conteúdo da página de Certificação e Desenvolvimento.
- `shadowing.html`: Conteúdo da página de Shadowing Virtual.
- `rituals.html`: Conteúdo da página da Biblioteca de Rituais.
- `profile.html`: Conteúdo da página de Perfil.

## Funcionalidades

- **Layout Desktop:** Interface adaptada para telas maiores com barra lateral de navegação e cabeçalho.
- **Navegação SPA-like:** A navegação entre as seções é feita dinamicamente usando JavaScript (`fetch` API) sem recarregar a página inteira. O conteúdo de cada seção é carregado a partir dos arquivos HTML correspondentes (`home.html`, `simulations.html`, etc.).
- **Identidade Visual:** Mantém a paleta de cores e tipografia definidas nos protótipos mobile, adaptadas para o desktop.

## Como Testar Localmente

1.  Navegue até este diretório no terminal.
2.  Inicie um servidor HTTP simples. Exemplo com Python:
    ```bash
    python3 -m http.server
    ```
3.  Abra seu navegador e acesse `http://localhost:8000` (ou a porta indicada pelo servidor).

## Como Implantar no GitHub Pages

1.  **Crie um Repositório no GitHub:** Crie um novo repositório público no GitHub (ex: `workbridge-desktop-prototype`).
2.  **Envie os Arquivos:** Adicione todos os arquivos deste diretório (`index.html`, `style.css`, `home.html`, etc.) ao repositório.
    - Você pode fazer isso via `git` ou fazendo upload direto pela interface do GitHub.
3.  **Habilite o GitHub Pages:**
    - No seu repositório no GitHub, vá para `Settings` > `Pages`.
    - Na seção `Build and deployment`, em `Source`, selecione `Deploy from a branch`.
    - Em `Branch`, selecione a branch onde estão seus arquivos (geralmente `main` ou `master`) e a pasta `/ (root)`.
    - Clique em `Save`.
4.  **Acesse o Site:** O GitHub fornecerá um link público (ex: `https://<seu-usuario>.github.io/<nome-repositorio>/`) onde seu protótipo estará acessível. Pode levar alguns minutos para a implantação inicial.

**Observação:** Como este protótipo usa `fetch` para carregar arquivos locais, ele funcionará corretamente quando hospedado em um servidor web (como o GitHub Pages ou um servidor local), mas pode não funcionar corretamente se você apenas abrir o `index.html` diretamente do seu sistema de arquivos no navegador devido às políticas de segurança (CORS).

