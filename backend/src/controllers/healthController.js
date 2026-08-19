function getHealth(req, res) {
  res.json({
    status: "success",
    message: "CP Coach API is running",
  });
}

module.exports = {
  getHealth,
};
