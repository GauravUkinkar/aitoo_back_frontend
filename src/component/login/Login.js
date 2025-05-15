import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";

const Login = ({ setIslogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/getall`);
      const users = response.data;
  
      console.log("API user:", users); // Should be an array of user(s)
  
      // Search for matching user in the array
      const userFound = users.find(
        (user) =>
          user.name.trim().toLowerCase() === name.trim().toLowerCase() &&
          user.email.trim().toLowerCase() === email.trim().toLowerCase()
      );
  
      if (userFound) {
        setIslogin(true);
        localStorage.setItem("auth", "true");
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  

  return (
    <div className="login-parent parent">
      <div className="login-cont container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-box2">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="btn-box">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
