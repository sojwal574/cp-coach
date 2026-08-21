const express = require("express");
const {
  getSubmissionStats,
  getVerdictStats,
  getTopicStats,
} = require("../controllers/analyticsController");

const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/submissions", authenticate, getSubmissionStats);
router.get("/verdicts", authenticate, getVerdictStats);
router.get("/topics", authenticate, getTopicStats);

module.exports = router;
