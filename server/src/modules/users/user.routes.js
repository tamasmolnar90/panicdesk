import express from "express";
import userController from "./user.controller.js";
// import { authenticate } from "../../middleware/authenticate.middleware.js";

const router = express.Router();

// router.use(authenticate);

router.get("/", userController.getAllUsers);
router.get("/id/:id", userController.getUserById);
router.get("/nev/:name", userController.getUserByName);
router.delete("/id/:id", userController.deleteUser);

export default router;
