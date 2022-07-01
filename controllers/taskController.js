import Task from "../models/Task.js";
import Project from "../models/Project.js";

// ! *** Create a Task ***
const createTask = async (req, res) => {
  const { project } = req.body;
  const projectExists = await Project.findById(project);

  if (!projectExists) {
    const error = new Error("Project doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }

  if (projectExists.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid action...");
    return res.status(403).json({ msg: error.message });
  }

  try {
    const newTask = await Task.create(req.body);
    res.json(newTask);
  } catch (error) {
    console.log(error);
  }
};

// ! *** Show Task by Id ***
const showTask = async (req, res) => {
  const { id } = req.params;
  /* Populating the project field in the Task model. */
  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid action...");
    return res.status(403).json({ msg: error.message });
  }
  res.json(task);
};

// ! *** Update Task ***
const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid action...");
    return res.status(403).json({ msg: error.message });
  }

  task.name = req.body.name || task.name;
  task.description = req.body.description || task.description;
  task.priority = req.body.priority || task.priority;
  task.deliveryDate = req.body.deliveryDate || task.deliveryDate;

  try {
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    console.log(error);
  }
};

// ! *** Delete Task ***
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task doesn`t exist...");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid action...");
    return res.status(403).json({ msg: error.message });
  }

  try {
    const deletedTask = await task.deleteOne();
    res.json({ msg: `Task: ${deletedTask.name}, was deleted...` });
  } catch (error) {
    console.log(error);
  }
};

// ! *** Toggle Task State ***
const toggleTaskState = async (req, res) => {};

export { createTask, showTask, updateTask, deleteTask, toggleTaskState };
