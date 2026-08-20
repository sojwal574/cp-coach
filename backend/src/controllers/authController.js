const authService = require("../services/authService");

async function register(req, res) {
  const { name, email, password, codeforcesHandle } = req.body;

  const user = await authService.registerUser(
    name,
    email,
    password,
    codeforcesHandle,
  );

  res.status(201).json({
    status: "success",
    data: user,
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await authService.loginUser(email, password);

  if (!user) {
    return res.status(401).json({
      status: "error",
      message: "Invalid email or password",
    });
  }

  res.json({
    status: "success",
    data: user.user,
    token: user.token,
  });
}

module.exports = {
  register,
  login,
};
