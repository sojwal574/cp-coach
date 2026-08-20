const problemService = require("../services/problemService");

async function getProblems(req, res) {
  const problems = await problemService.getAllProblems();

  res.json({
    status: "success",
    count: problems.length,
    data: problems,
  });
}

async function getProblemById(req, res) {
  const problem = await problemService.getProblemById(req.params.id);

  if (!problem) {
    return res.status(404).json({
      status: "error",
      message: "Problem not found",
    });
  }

  res.json({
    status: "success",
    data: problem,
  });
}

module.exports = {
  getProblems,
  getProblemById,
};
