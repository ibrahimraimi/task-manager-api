import express from "express";
import tasks from "./routes/tasks.js";
import connectDB from "./database/connect.js";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();

app.use(express.json());
app.use("/api/v1/tasks", tasks);

const startLocalServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server running on http://127.0.0.1:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startLocalServer();
