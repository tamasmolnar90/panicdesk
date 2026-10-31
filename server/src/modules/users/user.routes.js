import express from "express";
import userController from "./user.controller.js";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/id/:id", userController.getUserById);
router.get("/nev/:name", userController.getUserByName);
router.delete("/id/:id", userController.deleteUser);

router;

export default router;
