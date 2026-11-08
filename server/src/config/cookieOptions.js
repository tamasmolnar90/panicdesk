import { env } from "./env.js";

export const cookieOptions = {
  httpOnly: true,
  sameSite: env.nodeEnv === "production" ? "none" : "lax",
  secure: env.nodeEnv === "production",
  path: "/",
  maxAge: 5 * 60 * 1000,
};
