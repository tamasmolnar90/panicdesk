import pool from "../../config/database.js";

const findAllUsers = async () => {
  const results = await pool.query(
    `
      SELECT
        id,
        name,
        email,      
        role,
        password_hash,
        created_at
      FROM users
    `,
  );

  return results.rows;
};

const findUserById = async (userId) => {
  const result = await pool.query(
    `
      SELECT
        id,
        name,
        email,
        role,
        created_at
      FROM users
      WHERE id = $1
    `,
    [userId],
  );

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
};

const findUserByName = async () => {};

const deleteUser = async (userId) => {
  const result = await pool.query(
    `
      DELETE
      FROM users
      WHERE id = $1
      RETURNING *
    `,
    [userId],
  );

  // if (user.rowCount === 0) {
  //   return null;
  // }

  // return user.rows;

  // törlésnél rowCount, lekérdezéseknél rows.length
  return result.rowCount === 0 ? null : result.rows;
};

export default {
  findAllUsers,
  findUserById,
  findUserByName,
  deleteUser,
};
