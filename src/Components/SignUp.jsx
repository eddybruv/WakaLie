import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  return (
    <div className="sign-up">
      <div className="signup-details">
        <h2 className="create-account">Create Account</h2>
        <form action="" className="signup-form">
          <label htmlFor="name">Name</label> <br />
          <input type="text" name="name" /> <br />
          <label htmlFor="phone-number">Phone Number</label> <br />
          <input type="tel" name="phone-number" /> <br />
          <div className="gender-dob">
            <div>
              <label htmlFor="gender">Gender</label> <br />
              <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob">DoB</label> <br />
              <input type="date" name="dob" />
            </div>
          </div>
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" />
          <button className="sign-up-button" onClick={() => {
            navigate('/timeline');
          }}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
