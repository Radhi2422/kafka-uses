const express = require("express");
const router = express.Router();

const leaveController = require("../controllers/leaveController");

router.get("",leaveController.getLeaveInfo);
router.post("/validate", leaveController.validateLeaves);

module.exports = router;