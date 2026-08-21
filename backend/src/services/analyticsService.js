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

async function getVerdictStats(userId) {
  const result = await pool.query(
    `
    SELECT
      verdict,
      COUNT(*) AS count
    FROM submissions
    WHERE user_id = $1
    GROUP BY verdict
    ORDER BY count DESC
    `,
    [userId],
  );

  return result.rows;
}

async function getTopicStats(userId) {
  const result = await pool.query(
    `
    SELECT
      topic,
      COUNT(*) AS total_submissions,
      COUNT(*) FILTER (WHERE verdict = 'OK') AS accepted_submissions
    FROM (
      SELECT
        unnest(p.tags) AS topic,
        s.verdict
      FROM submissions s
      JOIN problems p
        ON s.problem_id = p.id
      WHERE s.user_id = $1
    ) AS topic_data
    GROUP BY topic
    ORDER BY total_submissions DESC
    `,
    [userId],
  );

  return result.rows;
}

module.exports = {
  getSubmissionStats,
  getVerdictStats,
  getTopicStats,
};
