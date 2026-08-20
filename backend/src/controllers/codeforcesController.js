const codeforcesService = require("../services/codeforcesService");

function getApiInfo(req, res) {
  res.json({
    status: "success",
    apiUrl: codeforcesService.CODEFORCES_API_URL,
  });
}

async function getUserInfo(req, res) {
  const { handle } = req.params;

  const user = await codeforcesService.getUserInfo(handle);

  res.json({
    status: "success",
    data: user,
  });
}

module.exports = {
  getApiInfo,
  getUserInfo,
};
