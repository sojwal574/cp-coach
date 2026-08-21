const express = require("express");
const authenticate = require("../middleware/authMiddleware");

const {
  getApiInfo,
  getUserInfo,
} = require("../controllers/codeforcesController");

const { syncUser } = require("../controllers/codeforcesSyncController");

const router = express.Router();

router.get("/info", getApiInfo);
router.get("/user/:handle", getUserInfo);
router.post("/sync/:handle", authenticate, syncUser);

module.exports = router;
