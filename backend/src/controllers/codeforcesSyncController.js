const codeforcesSyncService = require("../services/codeforcesSyncService");

async function syncUser(req, res) {
  const { handle } = req.params;

  const result = await codeforcesSyncService.syncUser(handle);

  res.json({
    status: "success",
    data: result,
  });
}

module.exports = {
  syncUser,
};
