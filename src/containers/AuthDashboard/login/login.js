/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LoginForm from "./loginForm/loginForm";
import "./login.css";

const Login = ({ changeLang, history }) => {
  return (
    <div className="login-container">
      <div className="right-side">
        <div className="logo">
          <span>Log In</span>
        </div>
        <LoginForm history={history} />
      </div>
    </div>
  );
};

export default Login;
