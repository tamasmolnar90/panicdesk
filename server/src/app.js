import express from "express";
import cors from "cors";
import { env } from "./config/env.js";

import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/users/user.routes.js";

const app = express();

// 1. GLOBAL MIDDLEWARE
app.use(cors({ origin: env.clientOrigin, credentials: true }));
app.use(express.json());

// 2. ROUTES
app.use("/", authRoutes);
app.use("/felhasznalok", userRoutes);

// 3. NOT FOUND

// 4. ERROR HANDLER

export default app;
