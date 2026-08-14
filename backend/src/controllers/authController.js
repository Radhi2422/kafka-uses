const authService = require("../services/authService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate request
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Call service
    const data = await authService.loginEmployee(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: data.token,
      employeeId: data.employee.employeeId,
      employee: data.employee,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || "Authentication failed",
    });
  }
};

module.exports = {
  login,
};