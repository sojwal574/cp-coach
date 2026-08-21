const express = require("express");
const { getSubmissionStats } = require("../controllers/analyticsController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/submissions", authenticate, getSubmissionStats);

module.exports = router;
