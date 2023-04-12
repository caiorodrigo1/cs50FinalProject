import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/data-source";
import { Task } from "../../entities/Task";
import { ICreateTaskDTO, ITask, ITasksRepository } from "../ITasksRepositories";

class TasksRepository implements ITasksRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  async create({ content, author }: ICreateTaskDTO): Promise<void> {
    const task = this.repository.create({ content, author });

    await this.repository.save(task);
  }

  async save(task: ITask): Promise<Task> {
    await this.repository.save(task);

    return task;
  }

  async list(): Promise<Task[]> {
    const tasks = await this.repository.find();

    return tasks;
  }

  async findByContent(content: string): Promise<Task> {
    const task = await this.repository.findOneBy({ content });

    return task;
  }

  async findById(id: string): Promise<Task> {
    const task = await this.repository.findOneBy({ id });

    return task;
  }

  async remove(id: string): Promise<void> {
    const task = await this.repository.findOneBy({ id });

    await this.repository.delete(task);
  }

  async edit({ id, content }: ITask): Promise<Task> {
    const task = await this.repository.findOneBy({ id });

    task.content = content;

    await this.repository.save(task);

    return task;
  }

  async markDone(id: string): Promise<Task> {
    const task = await this.repository.findOneBy({ id });

    task.isDone = true;

    await this.repository.save(task);

    return task;
  }
}

export { TasksRepository };
