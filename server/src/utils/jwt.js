import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

const createToken = (userId, role) =>
  jwt.sign({ sub: userId, role }, env.jwt.secret, {
    expiresIn: env.jwt.expiresIn,
  });

const verifyToken = (token) => jwt.verify(token, env.jwt.secret);

const getExpiresAt = (payload) => payload.exp * 1000;

const toAuthResponse = (user, payload) => ({
  user,
  expiresAt: payload.exp * 1000,
});

export { createToken, verifyToken, getExpiresAt, toAuthResponse };
