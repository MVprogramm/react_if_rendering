import React from "react";
import "./login.scss";

const Login = ({ onLogin }) => {
  return (
    <button className="btn login" onClick={onLogin}>
      Login
    </button>
  );
};

export default Login;
