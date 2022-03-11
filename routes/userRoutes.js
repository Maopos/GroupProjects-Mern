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

const router = express.Router();

// ! 13.1 User Routes
router.post("/", register);
router.post("/login", autenticate);
router.get("/confirm/:token", confirm);
router.post("/forgotPassword", forgotPassword);
router.get("/forgotPassword/:token", checkToken);
router.post("/forgotPassword/:token", newPassword);

router.get("/profile", checkAuth, profile);

export default router;
