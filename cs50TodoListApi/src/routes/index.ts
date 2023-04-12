import { Router } from "express";

import { sessionsRoutes } from "./sessions.routes";
import { tasksRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/tasks", tasksRoutes);
router.use("/users", usersRoutes);
router.use("/sessions", sessionsRoutes);

export { router };
