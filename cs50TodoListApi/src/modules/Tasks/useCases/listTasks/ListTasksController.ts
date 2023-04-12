import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTasksUseCase } from "./ListTasksUseCase";

class ListTasksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTasksUseCase = container.resolve(ListTasksUseCase);

    const tasks = await listTasksUseCase.execute();

    return response.status(200).json(tasks);
  }
}

export { ListTasksController };
