const pool = require("../config/database");

async function getSubmissionStats(userId) {
  const result = await pool.query(
    `
    SELECT
      COUNT(*) AS total_submissions,
      COUNT(*) FILTER (WHERE verdict = 'OK') AS accepted_submissions
    FROM submissions
    WHERE user_id = $1
    `,
    [userId],
  );

  return result.rows[0];
}

module.exports = {
  getSubmissionStats,
};
