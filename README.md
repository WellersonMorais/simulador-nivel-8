# Movie API - Node.js + MongoDB

## Descrição

Este projeto consiste em uma API REST desenvolvida com Node.js, Express e MongoDB utilizando Mongoose como ODM.

A aplicação foi criada com fins exclusivamente educacionais, com o objetivo de praticar conceitos fundamentais de desenvolvimento backend, incluindo:

- Estruturação de APIs REST
- Node.js e Express
- Middlewares
- Autenticação com JWT
- CRUD completo
- Persistência de dados com MongoDB
- Integração com Mongoose
- Async/Await
- Arquitetura em camadas

O projeto realiza operações de cadastro, listagem, atualização e remoção de filmes utilizando persistência em banco de dados.

---

# Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Dotenv
- Nodemon

---

# Estrutura do Projeto

```bash
src/
│
├── config/
│   └── database.js
│
├── controllers/
│   └── movies.controllers.js
│
├── middlewares/
│   └── verifyAuthentication.js
│
├── models/
│   └── Movie.js
│
├── routes/
│   └── movieRoutes.js
│
├── app.js
└── server.js
```

---

# Funcionalidades

## Filmes

- Criar filme
- Listar filmes
- Buscar filme por ID
- Atualizar filme
- Remover filme

## Autenticação

- Validação de token JWT
- Middleware de autenticação

---

# Instalação

## 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/movie-api.git
```

---

## 2. Entrar na pasta do projeto

```bash
cd movie-api
```

---

## 3. Instalar dependências

```bash
npm install
```

---

## 4. Criar arquivo .env

Crie um arquivo chamado:

```bash
.env
```

na raiz do projeto.

---

## Exemplo do .env

```env
PORT=3333

MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/moviesDB?retryWrites=true&w=majority

JWT_SECRET=secret
```

---

# Executando o Projeto

## Desenvolvimento

```bash
npm run dev
```

---

## Produção

```bash
npm start
```

---

# Endpoints

## POST /movies

Cria um novo filme.

### Body

```json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "Sci-Fi"
}
```

---

## GET /movies

Lista todos os filmes.

---

## GET /movies/:id

Busca um filme pelo ID.

---

## PUT /movies/:id

Atualiza um filme existente.

### Body

```json
{
  "title": "Batman Begins"
}
```

---

## DELETE /movies/:id

Remove um filme pelo ID.

---

# Autenticação JWT

As rotas protegidas utilizam autenticação via Bearer Token.

## Exemplo de Header

```http
Authorization: Bearer TOKEN_AQUI
```

---

# MongoDB

O projeto utiliza MongoDB Atlas para persistência dos dados.

A conexão é realizada através do Mongoose.

---

# Conceitos Praticados

- API REST
- CRUD
- Middlewares
- JWT
- Async/Await
- Mongoose
- MongoDB
- Arquitetura MVC
- Persistência de dados
- Manipulação de rotas
- Tratamento de erros

---

# Objetivo Educacional

Este projeto foi desenvolvido exclusivamente para fins de estudo e prática de desenvolvimento backend com Node.js e MongoDB.

Não possui finalidade comercial ou uso em ambiente de produção.

---

# Autor

Desenvolvido para estudos de Node.js, Express e MongoDB.