const userService = require("../services/userService");

async function getUsers(req, res) {
  const users = await userService.getAllUsers();

  res.json({
    status: "success",
    count: users.length,
    data: users,
  });
}

module.exports = {
  getUsers,
};
