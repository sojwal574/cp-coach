const pool = require("../config/database");

async function getSubmissionStats(userId) {
  const result = await pool.query(
    `
    SELECT
      COUNT(*) AS total_submissions,
      COUNT(*) FILTER (WHERE verdict = 'OK') AS accepted_submissions,
      ROUND(
        COUNT(*) FILTER (WHERE verdict = 'OK') * 100.0
        / NULLIF(COUNT(*), 0),
        2
      ) AS acceptance_rate
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
