// 13. createUser Routes
import express from "express";
// 17. import controller
import { register } from "../controllers/userController.js";

const router = express.Router();

// 13.1 Routes
router.post("/", register);

export default router;
