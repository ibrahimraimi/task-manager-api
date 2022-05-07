import Task from "../models/Task.js";

// Get all tasks https://127.0.0.1:api/v1/tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Create task https://127.0.0.1:api/v1/tasks
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get single task https://127.0.0.1:api/v1/tasks/:id
export const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Update a single task https://127.0.0.1:api/v1/tasks/:id
export const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ message: `No task with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Delete a single task https://127.0.0.1:api/v1/tasks/:id
export const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with id ${taskID}` });
    }
    res.status(204).json({ task: null, status: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
