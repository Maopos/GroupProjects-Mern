import express from "express";
import {
  showAllProjects,
  newProject,
  showOneProject,
  editProject,
  deleteProject,
  addCollaborator,
  deleteCollaborator,
  showTasks,
} from "../controllers/projectController.js";
import checkAuth from "../middleware/checkAuth.js";

const projectRouter = express.Router();

projectRouter.get("/", checkAuth, showAllProjects);
projectRouter.post("/", checkAuth, newProject);
projectRouter.get("/:id", checkAuth, showOneProject);
projectRouter.put("/:id", checkAuth, editProject);
projectRouter.delete("/:id", checkAuth, deleteProject);
projectRouter.get("/tasks/:id", checkAuth, showTasks);
projectRouter.post("/add-collaborator/:id", checkAuth, addCollaborator);
projectRouter.post ("/delete-collaborator/:id", checkAuth, deleteCollaborator);

export default projectRouter;
