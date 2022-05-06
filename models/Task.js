import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

export default mongoose.model("Task", TaskSchema);
