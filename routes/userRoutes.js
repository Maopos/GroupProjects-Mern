// 13. createUser Routes
import express from "express";
// 17. import controller
import {
  register,
  autenticate,
  confirm,
  forgotPassword,
  checkToken,
  newPassword,
  profile
} from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";

const userRouter = express.Router();

// ! 13.1 User Routes
userRouter.post("/", register);
userRouter.post("/login", autenticate);
userRouter.get("/confirm/:token", confirm);
userRouter.post("/forgotPassword", forgotPassword);
userRouter.get("/forgotPassword/:token", checkToken);
userRouter.post("/forgotPassword/:token", newPassword);

userRouter.get("/profile", checkAuth, profile);

export default userRouter;
