import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../services/authService";
// import loginImage2 from "../../assets/images/loginImage2.png";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const userLoggedIn = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        userId,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", userId);

        if (response.data.role === "User") {
          navigate("/userdashboard", { replace: true });
        } else if (response.data.role === "Coder") {
          navigate("/codedashboard", { replace: true });
        } else {
          navigate("/dashboard", { replace: true });
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page">

      <div className="login-wrapper">

        <div className="login-left">

          <div className="login-card">

            <h2>Welcome Back 👋</h2>

            <p className="subtitle">
              Sign in to continue to your account
            </p>

            <form onSubmit={userLoggedIn}>

              <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="error">{error}</p>}

              <button type="submit">
                Login
              </button>

            </form>

            <div className="divider">
              <span>New to Inventory Management?</span>
            </div>

            <Link to="/register" className="register-btn">
              Create Account
            </Link>

          </div>

        </div>

        <div className="login-right">

          {/* //<img style={{borderRadius:"200px"}} src={loginImage2} alt="Login" />
          {/* <img
            src="https://undraw.co/api/illustrations/phone-call.svg"
            alt="Customer Support"
          /> */}

          <h2>Manage Inventory Efficiently</h2>

          <p>
            Track products, manage stock, monitor sales,
            and collaborate with your team effortlessly.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;