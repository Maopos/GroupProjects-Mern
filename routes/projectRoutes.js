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

const router = express.Router();

router.get("/", checkAuth, showAllProjects);
router.post("/", checkAuth, newProject);
router.post("/:id", checkAuth, showOneProject);
router.put("/:id", checkAuth, editProject);
router.delete("/:id", checkAuth, deleteProject);
router.get("/tasks/:id", checkAuth, showTasks);
router.post("/add-collaborator/:id", checkAuth, addCollaborator);
router.post ("/delete-collaborator/:id", checkAuth, deleteCollaborator);

export default router;
