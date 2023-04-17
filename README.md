# CS50 TODO List

#### Video Demo: <https://www.youtube.com/watch?v=RnkNhvt9Z4M&ab_channel=ClipseHighlights>

#### Description:

This is a fullstack TODO list web application built using Node.js, Express, Postgres SQL, and Swagger. The backend provides RESTful API endpoints for creating and managing user sessions and tasks. The frontend is built using Angular 15, Bootstrap, and Material Angular.

## Getting Started

To run the API of the project, you need to follow these steps:

1. Install Docker on your machine.

2. Clone this repository to your local machine.

3. Navigate to the directory 'cs50TodoListApi'.

4. Run:
   `$ yarn`

5. Run the following command to start the containers:

   `$ docker-compose up
`

6. Once the containers are up and running, open a new terminal window and run the following command to enter the Docker container for the API:

   `$ docker exec -it todo-api /bin/bash
`

7. Finally, run the following command to apply the database migrations:

   `$ yarn typeorm migration:run -d src/database/data-source.ts
`
   
8. The API should now be accessible at `http://localhost:3990`.

## API Endpoints

This project provides the following RESTful API endpoints:

- `POST /users`: creates a new user.
- `POST /sessions`: creates a new user session.
- `POST /tasks`: creates a new task.
- `GET /tasks`: retrieves all tasks.
- `DELETE /tasks/:id`: deletes a task by ID.
- `PATCH /tasks/done/:id`: marks a task as done by ID.

## Frontend
The frontend of the application is built using Angular 14, Bootstrap, and Material Angular. To run the frontend, navigate to the 'cs50TodoListApp' directory and run the following commands:

`$ npm install`

`$ ng serve`

The frontend should now be accessible at http://localhost:4200.
