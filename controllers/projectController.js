import Project from "../models/Project.js";
import Task from "../models/Task.js";

// ! *** Show All Projects ***
const showAllProjects = async (req, res) => {
  const projects = await Project.find().where("creator").equals(req.user);
  res.json(projects);
};

// ! *** Create new Project ***
const newProject = async (req, res) => {
  const project = new Project(req.body);
  project.creator = req.user._id;
  try {
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (error) {
    console.log(error);
  }
};

// ! *** Show One Project ***
const showOneProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);

  if (!project) {
    const error = new Error("Project doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }
  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid action...");
    return res.status(404).json({ msg: error.message });
  }

  const tasks = await Task.find().where("project").equals(project._id);
  res.json({
    project,
    tasks,
  });
};

// ! *** Edit Project ***
const editProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);

  if (!project) {
    const error = new Error("Project doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }
  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid action...");
    return res.status(404).json({ msg: error.message });
  }

  project.name = req.body.name || project.name;
  project.description = req.body.description || project.description;
  project.deliveryDate = req.body.deliveryDate || project.deliveryDate;
  project.client = req.body.client || project.client;

  try {
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (error) {
    console.log(error);
  }
};

// ! *** Delete Project ***
const deleteProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);

  if (!project) {
    const error = new Error("Project doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }
  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid action...");
    return res.status(404).json({ msg: error.message });
  }
  try {
    await project.deleteOne();
    res.json({ msg: "Project deleted..." });
  } catch (error) {
    console.log(error);
  }
};

// ! *** Add Collaborator ***
const addCollaborator = async (req, res) => {};

// ! *** Delete Collaborator ***
const deleteCollaborator = async (req, res) => {};

export {
  showAllProjects,
  newProject,
  showOneProject,
  editProject,
  deleteProject,
  addCollaborator,
  deleteCollaborator,
};
