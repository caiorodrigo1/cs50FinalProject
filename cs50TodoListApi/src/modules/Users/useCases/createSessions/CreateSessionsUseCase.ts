import { sign, Secret } from "jsonwebtoken";
import authConfig from "../../../../config/auth";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import {
  ICreateSession,
  IUserAuthenticated,
  IUsersRepository,
} from "../../repositories/IUsersRepository";
import { IHashProvider } from "../../providers/HashProvider/IHashProvider";

@injectable()
class CreateSessionsUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  async execute({
    email,
    password,
  }: ICreateSession): Promise<IUserAuthenticated> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect.", 401);
    }

    const passwordConfirmed = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordConfirmed) {
      throw new AppError("Email or password incorrect.", 401);
    }

    const token = sign({}, authConfig.jwt.secret as Secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export { CreateSessionsUseCase };
