
# Projeto React - Consumo de API REST de Categorias

Este projeto é uma aplicação web desenvolvida em React que consome uma API REST para listar e exportar categorias. O objetivo é demonstrar a integração entre frontend (React) e backend (API PHP), exibindo os dados de categorias e permitindo o download em formato CSV.

## Funcionalidades

- Listagem de categorias vindas de uma API REST (PHP)
- Download das categorias em formato CSV
- Interface simples e responsiva

## Tecnologias Utilizadas

- [React](https://reactjs.org/) (Create React App)
- JavaScript (ES6+)
- Fetch API

## Como Executar o Projeto

1. **Clone o repositório:**
	```bash
	git clone <url-do-repositorio>
	```
2. **Acesse a pasta do projeto:**
	```bash
	cd apirest
	```
3. **Instale as dependências:**
	```bash
	npm install
	```
4. **Inicie a aplicação React:**
	```bash
	npm start
	```
5. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

> **Atenção:** Certifique-se de que a API PHP esteja rodando em [http://localhost:8080](http://localhost:8080) e que os endpoints `/categorias/listar.php` e `/categorias/exportar_CSV.php` estejam disponíveis.

## Estrutura dos Arquivos Principais

- `src/App.js`: Componente principal que faz a requisição à API, exibe as categorias e permite o download do CSV.
- `src/index.js`: Ponto de entrada da aplicação React.
- `public/index.html`: Estrutura HTML base.
- `package.json`: Dependências e scripts do projeto.

## Exemplo de Uso

Ao acessar a aplicação, será exibida uma lista de categorias vindas da API. Cada categoria mostra o nome e a descrição. O botão "Download CSV" permite baixar todas as categorias em um arquivo CSV gerado pelo backend.

## Scripts Disponíveis

- `npm start` — Inicia o servidor de desenvolvimento React.
- `npm run build` — Gera a versão de produção da aplicação.
- `npm test` — Executa os testes (caso existam).

