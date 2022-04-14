import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="login-details">
        <h2 className="login-account">Login</h2>
        <form action="" className="login-form">
          <label htmlFor="phone-number">Phone Number</label> <br />
          <input type="number" id="phone-number" /> <br />
          
          <label htmlFor="password">Password</label> <br />
          <input type="password" id="password" />
          <button className="login-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
