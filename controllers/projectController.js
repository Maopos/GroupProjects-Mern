import Project from "../models/Project.js";
import User from "../models/User.js";

// ! *** Show All Projects ***
const showAllProjects = async (req, res) => {
  const projects = await Project.find()
    .where("creator")
    .equals(req.user)
    .select("-tasks");
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
  const project = await Project.findById(id).populate("tasks");

  if (!project) {
    const error = new Error("Project doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }
  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid action...");
    return res.status(404).json({ msg: error.message });
  }

  res.json(project);
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

// ! *** Find Collaborator ***
const findCollaborator = async (req, res) => {
  const { email } = req.body;
  const collab = await User.findOne({ email }).select('-token -password -createdAt -updatedAt -__v -confirm');

  if (!collab) {
    const error = new Error("User doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }

  try {
    res.json(collab);
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
  findCollaborator,
  addCollaborator,
  deleteCollaborator,
};
