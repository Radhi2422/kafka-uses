// onst authService = require("../services/authService");
const Leave=require("../models/Leave")
exports.validateLeaves = async (req, res) => {
  try {
    console.log("Hii")
    // const { getTemporalClient } = require("../temporal/client");

    // console.log("Hii")

    // const client = await getTemporalClient();

    // const workflowId = `leave-${req.user.id}-${Date.now()}`;

    // const handle = await client.workflow.start("LeaveWorkflow", {
    //     taskQueue: "leave-task-queue",
    //     workflowId,
    //     args: [{
    //         employeeId: req.user.id,
    //         startDate: req.body.startDate,
    //         endDate: req.body.endDate
    //     }]
    // });

    // res.status(201).json({
    //     message: "Leave workflow started",
    //     workflowId: handle.workflowId
    // });
  }catch(err){
    console.log(err);
  }
}

exports.getLeaveInfo=async(e)=>{
  try{

  }catch(err){
    console.log(err);
  }
}