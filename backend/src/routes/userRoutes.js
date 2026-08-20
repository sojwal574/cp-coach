const express = require("express");
const { getUsers, getMe } = require("../controllers/userController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authenticate, getUsers);
router.get("/me", authenticate, getMe);

module.exports = router;
