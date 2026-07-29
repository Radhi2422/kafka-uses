const Employee = require("../models/Employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateCompanyEmail = require("../utils/verifyCompanyDomain");


const loginEmployee = async (email, password) => {

  if (!validateCompanyEmail(email)) {
    throw new Error("Not company access mail");
}
  // Find employee by email
  const employee = await Employee.findOne({
    email: email.toLowerCase(),
    isActive: true,
  });

  if (!employee) {
    throw new Error("User not registered or inactive");
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(
    password,
    employee.password
  );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT
  const token = jwt.sign(
    {
      employeeId: employee.employeeId,
      id: employee._id,
      role: employee.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return {
    token,
    employee: {
      employeeId: employee.employeeId,
      name: employee.name,
      email: employee.email,
      role: employee.role,
    },
  };
};

module.exports = {
  loginEmployee,
};