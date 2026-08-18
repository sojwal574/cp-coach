const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "CP Coach API is running",
  });
});

app.listen(PORT, () => {
  console.log(`CP Coach backend running on http://localhost:${PORT}`);
});
