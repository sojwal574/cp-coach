const express = require("express");
const cors = require("cors");
require("dotenv").config();

const healthRoutes = require("./routes/healthRoutes");
const problemRoutes = require("./routes/problemRoutes");
const errorHandler = require("./middleware/errorHandler");
const testDatabaseConnection = require("./config/testDatabase");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const codeforcesRoutes = require("./routes/codeforcesRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/health", healthRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/codeforces", codeforcesRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`CP Coach backend running on http://localhost:${PORT}`);
  testDatabaseConnection();
});
