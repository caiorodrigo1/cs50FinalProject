import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "../../repositories/ITasksRepositories";

interface IRequest {
  content: string;
  author: string;
}

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepostiroy: ITasksRepository
  ) {}

  async execute({ content, author }: IRequest): Promise<void> {
    this.tasksRepostiroy.create({ content, author });
  }
}

export { CreateTaskUseCase };
