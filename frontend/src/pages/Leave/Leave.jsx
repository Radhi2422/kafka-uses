import  { useState } from "react";
import "./Leave.css";
import axios from "axios"
const LeaveRequest = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
    days: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "startDate" || name === "endDate") {
      calculateDays(
        name === "startDate" ? value : formData.startDate,
        name === "endDate" ? value : formData.endDate
      );
    }
  };

  const calculateDays = (start, end) => {
    if (!start || !end) return;

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (endDate >= startDate) {
      const difference =
        Math.ceil(
          (endDate - startDate) / (1000 * 60 * 60 * 24)
        ) + 1;

      setFormData((prev) => ({
        ...prev,
        days: difference,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        days: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    try{
        e.preventDefault();
        console.log("Leave Request:", formData);
        const VITE_API_URL=import.meta.env.VITE_API_URL;
        const response=await axios.post(`${VITE_API_URL}/leave/validate`,formData);
    }catch(err){
        console.log(err);
    }

    // Add your API call here
    // Example:
    // await axios.post("/api/leave/request", formData);
  };

  return (
    <div className="leave-page">
      <div className="leave-card">

        <div className="leave-header">
          <div className="header-icon">📅</div>

          <div>
            <h1>Request Leave</h1>
            <p>Submit your leave request for approval</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* Employee ID */}
            <div className="form-group">
              <label htmlFor="employeeId">
                Employee ID
              </label>

              <input
                id="employeeId"
                type="text"
                name="employeeId"
                placeholder="Enter employee ID"
                value={formData.employeeId}
                onChange={handleChange}
                required
              />
            </div>

            {/* Leave Type */}
            <div className="form-group">
              <label htmlFor="leaveType">
                Leave Type
              </label>

              <select
                id="leaveType"
                name="leaveType"
                value={formData.leaveType}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select leave type
                </option>

                <option value="Casual Leave">
                  Casual Leave
                </option>

                <option value="Sick Leave">
                  Sick Leave
                </option>

                <option value="Annual Leave">
                  Annual Leave
                </option>

                <option value="Emergency Leave">
                  Emergency Leave
                </option>
              </select>
            </div>

            {/* Start Date */}
            <div className="form-group">
              <label htmlFor="startDate">
                Start Date
              </label>

              <input
                id="startDate"
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* End Date */}
            <div className="form-group">
              <label htmlFor="endDate">
                End Date
              </label>

              <input
                id="endDate"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                min={formData.startDate}
                required
              />
            </div>

            {/* Days */}
            <div className="form-group">
              <label htmlFor="days">
                Number of Days
              </label>

              <input
                id="days"
                type="number"
                name="days"
                value={formData.days}
                readOnly
                placeholder="Auto calculated"
              />
            </div>

            {/* Reason */}
            <div className="form-group full-width">
              <label htmlFor="reason">
                Reason
              </label>

              <textarea
                id="reason"
                name="reason"
                rows="5"
                placeholder="Enter the reason for your leave..."
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-footer">
            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                setFormData({
                  employeeId: "",
                  leaveType: "",
                  startDate: "",
                  endDate: "",
                  reason: "",
                  days: "",
                })
              }
            >
              Clear
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              Submit Request
              <span>→</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LeaveRequest;