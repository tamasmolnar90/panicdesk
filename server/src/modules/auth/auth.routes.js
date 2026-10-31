import express from "express";
import authController from "./auth.controller.js";

const router = express.Router();

router.post("/regisztracio", authController.register);
router.post("/bejelentkezes", authController.login);

export default router;
