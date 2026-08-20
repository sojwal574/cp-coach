const pool = require("../config/database");

async function getAllUsers() {
  const result = await pool.query(
    "SELECT id, name, email, codeforces_handle, created_at FROM users ORDER BY id",
  );

  return result.rows;
}

async function getUserById(id) {
  const result = await pool.query(
    `SELECT id, name, email, codeforces_handle, created_at
         FROM users
         WHERE id = $1`,
    [id],
  );

  return result.rows[0];
}

module.exports = {
  getAllUsers,
  getUserById,
};
