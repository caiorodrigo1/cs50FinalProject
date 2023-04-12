import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepositories";

interface IRequest {
  id: string;
}

@injectable()
class MarkDoneTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute({ id }: IRequest): Promise<Task> {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new AppError("Task does not exists.");
    }

    task.isDone = true;

    await this.tasksRepository.save(task);

    return task;
  }
}

export { MarkDoneTaskUseCase };
