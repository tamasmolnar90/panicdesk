import pool from "../../config/database.js";
import AppError from "../../utils/app.error.js";
import bcrypt from "bcryptjs";

const register = async ({ name, email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();

  const existing = await pool.query(
    `
      SELECT id
      FROM users
      WHERE email = $1
    `,
    [normalizedEmail],
  );

  if (existing.rows.length > 0) {
    throw new AppError(
      409,
      "EMAIL_IN_USE",
      "Ez az e-mail cím már használatban van.",
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const result = await pool.query(
    `
      INSERT INTO users (name, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, name, email
    `,
    [name, normalizedEmail, passwordHash],
  );

  return result.rows[0];
};

const login = async ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();

  const result = await pool.query(
    `
      SELECT
        id,
        name,
        email,
        password_hash
      FROM users
      WHERE email = $1
    `,
    [normalizedEmail],
  );

  if (result.rows.length === 0) {
    return null;
  }

  const user = result.rows[0];

  const isPasswordValid = await bcrypt.compare(password, user.password_hash);

  if (!isPasswordValid) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

export default {
  register,
  login,
};
