// 13. createUser Routes
import express from "express";
// 17. import controller
import {
  register,
  autenticate,
  confirm,
  forgotPassword
} from "../controllers/userController.js";

const router = express.Router();

// 13.1 Routes
router.post("/", register);
router.post("/login", autenticate);
router.get("/confirm/:token", confirm);
router.post('/forgotPassword', forgotPassword)

export default router;
