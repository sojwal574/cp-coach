const analyticsService = require("../services/analyticsService");

async function getSubmissionStats(req, res) {
  const stats = await analyticsService.getSubmissionStats(req.user.userId);

  res.json({
    status: "success",
    data: stats,
  });
}

module.exports = {
  getSubmissionStats,
};
