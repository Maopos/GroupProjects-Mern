// 13. createuser Routes
import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.send("Users");
});

export default userRoutes;
