const pool = require("../config/database");

async function getAllUsers() {
  const result = await pool.query(
    "SELECT id, name, email, codeforces_handle, created_at FROM users ORDER BY id",
  );

  return result.rows;
}

module.exports = {
  getAllUsers,
};
