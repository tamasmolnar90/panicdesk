import jwt from "jsonwebtoken";

const createToken = (userId, role) =>
  jwt.sign({ sub: userId, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

const getExpiresAt = (payload) => payload.exp * 1000;

const toAuthResponse = (user, payload) => ({
  user,
  expiresAt: payload.exp * 1000,
});

export { createToken, verifyToken, getExpiresAt, toAuthResponse };
