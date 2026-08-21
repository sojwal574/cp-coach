const codeforcesSyncService = require("../services/codeforcesSyncService");

async function syncUser(req, res) {
  try {
    const { handle } = req.params;

    const result = await codeforcesSyncService.syncUser(
      req.user.userId,
      handle,
    );

    res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(502).json({
      status: "error",
      message: "Unable to reach Codeforces API",
    });
  }
}

module.exports = {
  syncUser,
};
