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

# MongoDB

O projeto utiliza MongoDB Atlas para persistência dos dados.

A conexão é realizada através do Mongoose.

---

# Objetivo Educacional

Este projeto foi desenvolvido exclusivamente para fins de estudo e prática de desenvolvimento backend com Node.js e MongoDB.

Não possui finalidade comercial ou uso em ambiente de produção.
