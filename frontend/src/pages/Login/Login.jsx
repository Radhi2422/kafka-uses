import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { setEmployeeId } from "../../redux/auth/authSlice";
import "./Login.css";
import { loginUser } from "../../services/authService";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      dispatch(setEmployeeId({
        employeeId: data.data.employeeId,
      }));
      console.log(data.data.employeeId)
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo-section">

          <div className="company-logo">
            EL
          </div>

          <h1>Employee Leave Portal</h1>

          <p>Sign in to continue</p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <FiMail className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Company Email"
              value={form.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <FiLock className="input-icon" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

          </div>

          <div className="forgot-password">
            <a href="/">Forgot Password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="login-btn"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <div className="footer">
          © 2026 ABC Technologies Pvt. Ltd.
        </div>

      </div>

    </div>
  );
}

export default Login;