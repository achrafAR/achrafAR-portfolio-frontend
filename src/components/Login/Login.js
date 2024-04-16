import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        username,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/projects/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // Check if error response status code indicates invalid credentials
      if (error.response && error.response.status === 401) {
        alert("Incorrect username or password");
      } else {
        // Handle other types of errors, e.g., network issues
        alert("An error occurred while logging in. Please try again later.");
      }
    }
  };


  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-image">
          <h1>Welcome To Login Page</h1>
        </div>
        <div className="login-form">
          <div className="login-form-input">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-form-button">
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
