import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Display = () => {
  const userFirstName = localStorage.getItem("firstName");
  const userLastName = localStorage.getItem("lastName");
  const tokenData = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!tokenData) {
    window.location.replace("/");
  }
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <h2>User Display Page </h2>
      <h1>{userFirstName}</h1>
      <h2>{userLastName}</h2>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default Display;
