const userService = require("../services/userService");

async function getUsers(req, res) {
  const users = await userService.getAllUsers();

  res.json({
    status: "success",
    count: users.length,
    data: users,
  });
}

async function getMe(req, res) {
  const user = await userService.getUserById(req.user.userId);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.json({
    status: "success",
    data: user,
  });
}

module.exports = {
  getUsers,
  getMe,
};
