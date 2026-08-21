const express = require("express");
const {
  getSubmissionStats,
  getVerdictStats,
} = require("../controllers/analyticsController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/submissions", authenticate, getSubmissionStats);
router.get("/verdicts", authenticate, getVerdictStats);

module.exports = router;
