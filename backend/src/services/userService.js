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

async function updateCodeforcesProfile(
  userId,
  codeforcesHandle,
  codeforcesRating,
  codeforcesMaxRating,
) {
  const result = await pool.query(
    `UPDATE users
     SET codeforces_handle = $1,
         codeforces_rating = $2,
         codeforces_max_rating = $3,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = $4
     RETURNING id,
               name,
               email,
               codeforces_handle,
               codeforces_rating,
               codeforces_max_rating,
               created_at,
               updated_at`,
    [codeforcesHandle, codeforcesRating, codeforcesMaxRating, userId],
  );

  return result.rows[0];
}

module.exports = {
  getAllUsers,
  getUserById,
  updateCodeforcesProfile,
};
