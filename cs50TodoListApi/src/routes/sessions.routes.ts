import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { CreateSessionsController } from "../modules/Users/useCases/createSessions/CreateSessionsController";

const sessionsRoutes = Router();
const sessionsController = new CreateSessionsController();

sessionsRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create
);

export { sessionsRoutes };
