import express from "express";
import authController from "./auth.controller.js";
import { authenticate } from "../../middleware/authenticate.middleware.js";

const router = express.Router();

router.post("/regisztracio", authController.register);
router.post("/bejelentkezes", authController.login);
router.post("/kijelentkezes", authController.logout);
router.get("/me", authenticate, authController.me);

export default router;
