import { Task } from "../entities/Task";

interface ICreateTaskDTO {
  content: string;
  author: string;
}

interface ITask {
  id: string;
  content: string;
  isDone: boolean;
  author: string;
}

interface ITasksRepository {
  findByContent(content: string): Promise<Task>;
  findById(id: string): Promise<Task>;
  list(): Promise<Task[]>;
  create({ content, author }: ICreateTaskDTO): Promise<void>;
  save(task: ITask): Promise<Task>;
  remove(id: string): Promise<void>;
  edit({ id, content }: ITask): Promise<Task>;
  markDone(id: string, isDone: boolean): Promise<Task>;
}

export { ITasksRepository, ICreateTaskDTO, ITask };
