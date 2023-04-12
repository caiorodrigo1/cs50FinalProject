import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepositories";

interface IRequest {
  id: string;
  content: string;
}

@injectable()
class EditTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute({ id, content }: IRequest): Promise<Task> {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new AppError("Task does not exists.");
    }

    task.content = content;

    await this.tasksRepository.save(task);

    return task;
  }
}

export { EditTaskUseCase };
