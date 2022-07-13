import express from "express";
import {
  showAllProjects,
  newProject,
  showOneProject,
  editProject,
  deleteProject,
  findCollaborator,
  addCollaborator,
  deleteCollaborator,
} from "../controllers/projectController.js";
import checkAuth from "../middleware/checkAuth.js";

const projectRouter = express.Router();

projectRouter.get("/", checkAuth, showAllProjects);
projectRouter.post("/", checkAuth, newProject);
projectRouter.get("/:id", checkAuth, showOneProject);
projectRouter.put("/:id", checkAuth, editProject);
projectRouter.delete("/:id", checkAuth, deleteProject);

projectRouter.post("/collabs", checkAuth, findCollaborator);
projectRouter.post("/collabs/:id", checkAuth, addCollaborator);
projectRouter.delete("/collabs/:id", checkAuth, deleteCollaborator);

export default projectRouter;
