# **Sistema de Agenda**

Este projeto é uma aplicação **full stack** desenvolvida com **Node.js** e **Express** no back-end, utilizando **MongoDB** como banco de dados não relacional. A aplicação segue boas práticas de versionamento com **Git Flow**. Seu objetivo é fornecer uma agenda digital simples e funcional, permitindo o cadastro, listagem, edição e remoção de contatos.

## 📌 **Sobre o Projeto**

O Sistema de Agenda foi criado para facilitar o gerenciamento de contatos pessoais ou profissionais. A aplicação disponibiliza uma API REST robusta e segura no back-end, com uma interface front-end básica e funcional que permite aos usuários acessarem todas as funcionalidades com facilidade.

## 🚀 **Link da Aplicação**

A aplicação está hospedada gratuitamente no [Render](https://render.com), com integração ao **MongoDB Atlas** para persistência dos dados:

👉 **Acesse aqui**: [https://sistema-de-agenda.onrender.com](https://sistema-de-agenda.onrender.com)

## 🧪 **Funcionalidades**

- ✅ Cadastro de contatos (nome, e-mail, telefone, etc.)
- 🔄 Edição de informações dos contatos
- 📋 Listagem de todos os contatos cadastrados
- ❌ Exclusão de contatos
- 🔐 Sistema de autenticação com registro e login
- ⚠️ Validações básicas (ex: duplicidade de e-mail, campos obrigatórios)

## 🧰 **Tecnologias Utilizadas**

### 💻 **Front-End**
- HTML e CSS básico (estático)

### 🔙 **Back-End**
- **Node.js** – Ambiente de execução JavaScript
- **Express.js** – Framework web minimalista
- **Mongoose** – ODM para MongoDB
- **Dotenv** – Gerenciamento de variáveis de ambiente
- **Bcrypt.js** – Criptografia de senhas
- **Express-Validator** – Validações de dados nas requisições  
- **Express-Session & Connect-Mongo** – Gerenciamento de sessão e autenticação

### 🗃️ **Banco de Dados**
- **MongoDB Atlas** – Banco de dados NoSQL escalável e flexível na nuvem 

### 🧑‍💻 **Versionamento**
- **Git e GitHub** – Controle de versão
- **Git Flow** – Estrutura organizada de branches para desenvolvimento colaborativo

## 🔁 **Fluxo de Versionamento (Git Flow)**

- `main`: Branch de produção
- `develop`: Branch principal de desenvolvimento
- `feat/estrutura-contato`: Funcionalidades relacionadas ao CRUD de contatos
- `feat/register-login`: Funcionalidades de autenticação de usuários
- `hotfix/*`: Correções rápidas em produção

## 🔌 **Integração e Deploy**

- API REST estruturada e documentada para consumo por qualquer front-end
- Deploy do servidor feito no **Render** (versão gratuita)
- MongoDB hospedado no **MongoDB Atlas**
- Variáveis de ambiente configuradas com **Dotenv** para maior segurança

## 📄 **Licença**

Este projeto está licenciado sob a licença MIT.

## 👤 **Autor**
- **Paulo Robert** - [GitHub](https://github.com/PauloRobertt)