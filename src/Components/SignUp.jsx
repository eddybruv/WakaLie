import React from "react";

function SignUp() {
  return (
    <div className="sign-up">
      <div className="signup-details">
        <h2 className="create-account">Create Account</h2>
        <form action="" className="signup-form">
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" /> <br />
          <label htmlFor="phone-number">Phone Number</label> <br />
          <input type="number" id="phone-number" /> <br />
          <div className="gender-dob">
            <div>
              <label htmlFor="gender">Gender</label> <br />
              <input type="text" id="gender" />
            </div>
            <div>
              <label htmlFor="dob">DoB</label> <br />
              <input type="date" id="dob" />
            </div>
          </div>
          <label htmlFor="password">Password</label> <br />
          <input type="password" id="password" />

          <button className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
