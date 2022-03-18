// 1. import express
import express from "express";
// 7. import connectDb and dotenv
import connectDb from "./config/db.js";
import dotenv from "dotenv";
// 13. import Routes
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

import cors from "cors";

// 14. create directory controllers/userController.js

// 2.1 Run server
const app = express();
app.use(express.json());



// 8. Connect mongoDb
dotenv.config();
connectDb();

// setup cors
const whiteList = [process.env.FRONTEND];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Cors Error..."));
    }
  },
};
app.use(cors(corsOptions));

// 9. create directory models/User.js

// 12. create Routing
app.get("/", (req, res) => {
  res.send("📡 Welcome to GroupProject Server!!!");
});

// 12.1 create directory routes
app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);

// 2.2 Run server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("");
  console.log("==================================");
  console.log("");
  console.log(`✅ Server runs on port: ${PORT}!!!`);
});

// 3. create directory config/db.js
