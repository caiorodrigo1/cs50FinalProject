import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { CreateUserController } from "../modules/Users/useCases/createUser/CreateUserController";

const usersRoutes = Router();
const usersController = new CreateUserController();

usersRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.handle
);

export { usersRoutes };
