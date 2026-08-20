const express = require("express");

const {
  getApiInfo,
  getUserInfo,
} = require("../controllers/codeforcesController");

const router = express.Router();

router.get("/info", getApiInfo);
router.get("/user/:handle", getUserInfo);

module.exports = router;
