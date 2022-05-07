import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [50, "can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", TaskSchema);
