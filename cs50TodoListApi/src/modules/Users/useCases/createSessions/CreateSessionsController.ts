import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSessionsUseCase } from "./CreateSessionsUseCase";

class CreateSessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSession = container.resolve(CreateSessionsUseCase);

    const user = await createSession.execute({
      email,
      password,
    });

    return response.json(user);
  }
}

export { CreateSessionsController };
