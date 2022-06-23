import express from "express";
import checkAuth from "../middleware/checkAuth.js";

import {
  createTask,
  showTask,
  updateTask,
  deleteTask,
  toggleTaskState,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

/* Creating a route for each of the CRUD operations. */
taskRouter.post("/", checkAuth, createTask);
taskRouter.get("/:id", checkAuth, showTask);
taskRouter.put("/:id", checkAuth, updateTask);
taskRouter.delete("/:id", checkAuth, deleteTask);
taskRouter.post("/state/:id", checkAuth, toggleTaskState);

export default taskRouter;
