import { Request, Response } from "express";
import { container } from "tsyringe";
import { MarkDoneTaskUseCase } from "./MarkDoneTaskUseCase";

class MarkDoneTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const markDoneTaskUseCase = container.resolve(MarkDoneTaskUseCase);

    const task = await markDoneTaskUseCase.execute({
      id,
    });

    return response.status(200).json(task);
  }
}

export { MarkDoneTaskController };
