const pool = require("../config/database");

async function getAllProblems() {
  const result = await pool.query("SELECT * FROM problems ORDER BY id");

  return result.rows;
}

async function getProblemById(id) {
  const result = await pool.query("SELECT * FROM problems WHERE id = $1", [id]);

  return result.rows[0];
}

module.exports = {
  getAllProblems,
  getProblemById,
};
