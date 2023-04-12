import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditTaskUseCase } from "./EditTaskUseCase";

class EditTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { content } = request.body;

    const editTaskUseCase = container.resolve(EditTaskUseCase);

    const task = await editTaskUseCase.execute({
      id,
      content,
    });

    return response.status(200).json(task);
  }
}

export { EditTaskController };
