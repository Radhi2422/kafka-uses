const express = require("express");
const cors = require("cors");

const authRoutes = require("../routes/authRoutes");
const leaveRoutes = require("../routes/leaveroute");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Employee Authentication API is running...",
  });
});

// 3. /api/auth
app.use("/api/auth", authRoutes);

// 2. /employeeid

// 1. /leave
// /id
app.use("/api/auth/leave", leaveRoutes);
module.exports = app;