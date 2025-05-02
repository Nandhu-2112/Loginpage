import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Loginpage.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3001/users`)
      .then((response) => {
        const user = response.data.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
         
          navigate("/table");  
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div style={{ padding: "20px", textAlign:"center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", margin: "10px" }}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px" }}
          required
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px", margin: "10px" }}>
          Login
        </button>
      </form>

      <p>Don't you have an account?</p>
      <button
        onClick={() => navigate("/register")}
        style={{ padding: "10px 20px" }}
      >
        Register
      </button>
    </div>
  );
};

export default Login;






