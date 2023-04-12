import { Router } from "express";

import { CreateTaskController } from "../modules/Tasks/useCases/createTask/CreateTaskController";
import { DeleteTaskController } from "../modules/Tasks/useCases/deleteTask/DeleteTaskController";
import { EditTaskController } from "../modules/Tasks/useCases/editTask/EditTaskController";
import { ListTasksController } from "../modules/Tasks/useCases/listTasks/ListTasksController";
import { MarkDoneTaskController } from "../modules/Tasks/useCases/markDoneTask/MarkDoneTaskController";
import isAuthenticated from "../shared/middlewares/isAuthenticated";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const editTasksController = new EditTaskController();
const markDoneTasksController = new MarkDoneTaskController();
const deleteTasksController = new DeleteTaskController();

tasksRoutes.post("/", isAuthenticated, createTaskController.handle);

tasksRoutes.get("/", isAuthenticated, listTasksController.handle);

tasksRoutes.patch("/:id", isAuthenticated, editTasksController.handle);

tasksRoutes.patch("/done/:id", isAuthenticated, markDoneTasksController.handle);

tasksRoutes.delete("/:id", isAuthenticated, deleteTasksController.handle);

export { tasksRoutes };
