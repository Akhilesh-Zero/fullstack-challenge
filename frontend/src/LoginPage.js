import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "./UserContext"; 
// import { useHistory } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const { setIsLoggedIn, login } = useContext(UserContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      console.log(data);

      console.log("Response status:", response.status); // Logging the response status
      console.log("Data:", data);

      if (response.status === 200) {
        // Login successful, navigate to contacts page
        // Inside the handleSubmit function after verifying the login is successful
        localStorage.setItem("username", credentials.username);
        login(credentials.username);
        history.push("/");
      } else {
        alert(data.message || "Error logging in.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="form-control"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="form-control"
          required
        />
        <button type="submit" className="btn btn-success">
          Login
        </button>
        <span className="login-register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default LoginPage;
