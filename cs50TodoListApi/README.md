# Sobre o projeto

Este projeto é a resolução de um desafio backend na Top Down.

### Requisitos

● Construção de uma API para uma pequena aplicação to-do list com as seguintes funcionalidades:

  ● Adicionar uma tarefa
  
  ● Listar as tarefas cadastradas
  
  ● Excluir uma tarefa
  
  
  
● Funcionalidades opcionais que foram implementadas:



  ● Editar uma tarefa
  
  ● Marcar uma tarefa como concluída
  
  ● Login de acesso a aplicação
  
# Para rodar o projeto

<h3>Clone o repositório</h3>

```
$ git clone git@github.com:caiorodrigo1/todoListApi.git

$ cd todoListApi
```

<h3>Instale as dependencias</h3>

```
$ yarn
```

<h3>Rodar o projeto</h3>

Para rodar a aplicação, no seu terminal digite:

```
$ docker build
$ docker compose up
$ docker exec -it todo-api /bin/bash
$ yarn typeorm migration:run -d src/database/data-source.ts

Após a criação do usuário deve ser feito a autenticação, e utilizar o token no header para as rotas de task.
```

<h3>Rotas</h3>

Neste projeto são utilizadas a rotas abaixo:

POST - http://localhost:3990/users

POST - http://localhost:3990/sessions

POST - http://localhost:3990/tasks

GET - http://localhost:3990/tasks

DELETE - http://localhost:3990/tasks/:id

PATCH - http://localhost:3990/tasks/:id

PATCH - http://localhost:3990/tasks/done/:id

Indico utilizar o postman ou insomnia para o envio das requisições.

# Main libraries

```
    "bcryptjs"
    "celebrate"
    "express"
    "jsonwebtoken"
    "pg"
    "reflect-metadata"
    "swagger-ui-express"
    "tsyringe"
    "typeorm"
    "uuid"
    "eslint"
    "prettier"
```

# Observações

  Documentação feita com swagger, disponível em http://localhost:3990/api-docs
