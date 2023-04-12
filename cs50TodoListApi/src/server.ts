import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import { AppDataSource } from "./database/data-source";
import "./shared/container";
import { router } from "./routes";
import { errors } from "celebrate";
import { AppError } from "./shared/errors/AppError";
import swaggerFile from "./swagger.json";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

  app.use(router);

  app.use(errors());

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: "error",
          message: error.message,
        });
      }
      console.log(error);

      return response.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  );

  app.listen(3990, () => console.log("Server up at port 3990"));
});
