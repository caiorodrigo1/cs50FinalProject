import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "../modules/Tasks/entities/Task";
import { User } from "../modules/Users/entities/User";
import { UserToken } from "../modules/Users/entities/UserToken";
import { CreateTasksTable1664386626447 } from "./migrations/1664386626447-CreateTasksTable";
import { CreateUsersTable1664541361965 } from "./migrations/1664541361965-CreateUsersTable";
import { CreateUserTokensTable1664546120554 } from "./migrations/1664546120554-CreateUserTokensTable";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "changeme",
  entities: [Task, User, UserToken],
  migrations: [
    CreateTasksTable1664386626447,
    CreateUsersTable1664541361965,
    CreateUserTokensTable1664546120554,
  ],
});

export { AppDataSource };
