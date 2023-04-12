import { container } from "tsyringe";

import { ITasksRepository } from "../../modules/Tasks/repositories/ITasksRepositories";
import { TasksRepository } from "../../modules/Tasks/repositories/implementations/TasksRepositories";
import { IUsersRepository } from "../../modules/Users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/Users/repositories/implementations/UsersRepository";
import { IUserTokensRepository } from "../../modules/Users/repositories/IUserTokensRepository";
import { UserTokensRepository } from "../../modules/Users/repositories/implementations/UserTokensRepository";

import "../../modules/Users/providers";

container.registerSingleton<ITasksRepository>(
  "TasksRepository",
  TasksRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUserTokensRepository>(
  "UserTokensRepository",
  UserTokensRepository
);
