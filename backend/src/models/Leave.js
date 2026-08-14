const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    status: {
      type: String,
      enum:["PENDING","APPROVED","REJECTED","CANCELLED"],
      default:"Pending"
    },

    startDate: {
      type: Date,
      required: true,
      trim: true,
    },
    endDate: {
      type: Date,
      required: true,
      trim: true,
    },
    reason: {
      type: String,
      required: true,
      minlength: 6,
    },

    leaveType: {
      type: String,
      enum: ["Sick", "Casual", "Paid"],
      default: "Sick",
    },

    days: {
      type: Number,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "Leaves",
  }
);

module.exports = mongoose.model("Leaves", leaveSchema);