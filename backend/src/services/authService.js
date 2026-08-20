const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../config/database");

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

async function comparePassword(password, passwordHash) {
  return bcrypt.compare(password, passwordHash);
}

async function registerUser(name, email, password, codeforcesHandle) {
  const passwordHash = await hashPassword(password);

  const result = await pool.query(
    `INSERT INTO users
        (name, email, password_hash, codeforces_handle)
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, email, codeforces_handle, created_at`,
    [name, email, passwordHash, codeforcesHandle || null],
  );

  return result.rows[0];
}

async function loginUser(email, password) {
  const result = await pool.query(
    `SELECT id, name, email, password_hash, codeforces_handle
         FROM users
         WHERE email = $1`,
    [email],
  );

  const user = result.rows[0];

  if (!user) {
    return null;
  }

  const isValid = await comparePassword(password, user.password_hash);

  if (!isValid) {
    return null;
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  delete user.password_hash;

  return {
    user,
    token,
  };
}

module.exports = {
  hashPassword,
  comparePassword,
  registerUser,
  loginUser,
};
