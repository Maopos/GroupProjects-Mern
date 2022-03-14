import Project from "../models/Project.js";

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

// ! *** Show One Projects ***
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
  res.json(project);
};

// ! *** Edit Project ***
const editProject = async (req, res) => {};

// ! *** Delete Project ***
const deleteProject = async (req, res) => {};

// ! *** Add Collaborator ***
const addCollaborator = async (req, res) => {};

// ! *** Delete Collaborator ***
const deleteCollaborator = async (req, res) => {};

// ! *** Show All Tasks ***
const showTasks = async (req, res) => {};

export {
  showAllProjects,
  newProject,
  showOneProject,
  editProject,
  deleteProject,
  addCollaborator,
  deleteCollaborator,
  showTasks,
};
