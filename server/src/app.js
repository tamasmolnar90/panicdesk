import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/users/user.routes.js";

import { notFoundHandler } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

// 1. GLOBAL MIDDLEWARE
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// 2. ROUTES
app.use("/", authRoutes);
app.use("/felhasznalok", userRoutes);

// 3. NOT FOUND
app.use(notFoundHandler);

// 4. ERROR HANDLER
app.use(errorHandler);

export default app;
