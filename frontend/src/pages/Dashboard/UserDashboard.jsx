import { useState } from "react";
import {
  FaUserCircle,
  FaChevronDown,
  FaCalendarAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
  FaBuilding,
} from "react-icons/fa";
import useEmployee from "../../hooks/useEmployee";
import "./UserDashboard.css";

function Dashboard() {
  const { employee, employeeId } = useEmployee();
  console.log("Employee Data:", employee, "Employee ID:", employeeId);
  //function to get required details for employee
  //function 2 to get leaves data for current employee
  const [open, setOpen] = useState(false);
  return (
    <div className="dashboard">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          Employee Leave Portal
        </div>

        <div
          className="profile"
          onClick={() => setOpen(!open)}
        >
          <FaUserCircle className="profile-icon" />

          <span>{employee?.name}</span>

          <FaChevronDown />

          {open && (
            <div className="dropdown">

              <div>My Profile</div>

              <div>Settings</div>

              <div>My Leaves</div>

              <div className="logout">
                Logout
              </div>

            </div>
          )}

        </div>

      </nav>

      {/* Welcome Section */}

     <section className="welcome-card">

        <div className="welcome-overlay">

            <h2>Welcome Back, {employee?.name}</h2>

            <blockquote>
                “Taking time to rest is not stepping away from success—it is preparing yourself to achieve it with renewed energy, creativity, and purpose.”
            </blockquote>

            <p className="quote-author">
                — We value your well-being as much as your work.
            </p>

        </div>

        </section>

      {/* Employee Details */}

      <section className="employee-info">

        <h2>Employee Information</h2>

        <div className="info-grid">

          <div>
            <strong>Employee ID</strong>
            <p>{employeeId}</p>
          </div>

          <div>
            <strong>Name</strong>
            <p>{employee?.name}</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>{employee?.email}</p>
          </div>

          <div>
            <strong>Role</strong>
            <p>{employee?.role}</p>
          </div>

        </div>

      </section>
 {/* Leave Summary */}

      <section className="leave-section">

        <h2>Leave Summary</h2>

        <div className="leave-cards">

          <div className="card total">

            <FaCalendarAlt />

            <h3>20</h3>

            <p>Total Leaves</p>

          </div>

          <div className="card approved">

            <FaCheckCircle />

            <h3>12</h3>

            <p>Approved</p>

          </div>

          <div className="card pending">

            <FaHourglassHalf />

            <h3>3</h3>

            <p>Pending</p>

          </div>

          <div className="card rejected">

            <FaTimesCircle />

            <h3>1</h3>

            <p>Rejected</p>

          </div>

        </div>

      </section>
      {/* Company */}

     <section className="company-section">

        <div className="company-header">
          <FaBuilding />
          <h2>About Our Company</h2>
        </div>

        <p>
          Welcome to <strong>Employee Leave Portal</strong>, a modern HR solution
          designed to simplify leave management while enhancing employee experience.
          Our platform enables employees to apply for leaves effortlessly, track
          leave balances in real time, and receive instant approval updates. Managers
          and HR teams benefit from an efficient approval workflow, centralized leave
          records, and insightful reports that improve workforce planning.
        </p>

        <p>
          We believe that a healthy work-life balance leads to greater productivity,
          stronger collaboration, and happier employees. By automating leave
          management, we reduce administrative overhead and allow teams to focus on
          what truly matters—innovation, growth, and delivering exceptional results.
        </p>

        <div className="company-highlights">
          <div className="highlight-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To create a transparent, efficient, and employee-friendly leave
              management system that empowers organizations of every size.
            </p>
          </div>

          <div className="highlight-card">
            <h3>🚀 Why Choose Us?</h3>
            <ul>
              <li>Real-time Leave Tracking</li>
              <li>Quick Approval Workflow</li>
              <li>Secure Employee Records</li>
              <li>Role-Based Access Control</li>
              <li>Responsive and Modern Interface</li>
            </ul>
          </div>
        </div>

        <div className="social-section">

          <h3>Connect With Us</h3>

          <div className="social-links">

            <a
              href="https://www.linkedin.com/company/your-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/your-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/your-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>

            <a
              href="https://www.instagram.com/your-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/your-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;