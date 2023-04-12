import { inject, injectable } from "tsyringe";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepositories";

@injectable()
class ListTasksUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepositories: ITasksRepository
  ) {}

  async execute(): Promise<Task[]> {
    const tasks = await this.tasksRepositories.list();

    return tasks;
  }
}

export { ListTasksUseCase };
