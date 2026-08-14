const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");

router.get("",employeeController.getEmployeeInfo);
// router.post("/validate", employeeController.validateLeaves);

module.exports = router;