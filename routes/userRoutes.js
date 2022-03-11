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
} from "../controllers/userController.js";

const router = express.Router();

// 13.1 Routes
router.post("/", register);
router.post("/login", autenticate);
router.get("/confirm/:token", confirm);
router.post("/forgotPassword", forgotPassword);
router.get("/forgotPassword/:token", checkToken);
router.post("/forgotPassword/:token", newPassword);

export default router;
