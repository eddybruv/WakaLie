import React from "react";
import {useNavigate} from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  return (
    <div className="login">
      <div className="login-details">
        <h2 className="login-account">Login</h2>
        <form action="" className="login-form">
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" placeholder="example@domain.com"/> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" />
          <button
            className="login-button"
            onClick={() => {
              navigate("/timeline");
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
