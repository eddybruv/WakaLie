import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    number: undefined,
    password: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const submit = async () => {
    console.log(user);
    let response = await axios.post(
      "http://localhost:5000/api/user/create_account",
      user
    );

    if (response.status === 200) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/feed");
    } else {
      alert("Account not registered");
    }
  };

  return (
    <div className="sign-up">
      <div className="signup-details">
        <h2 className="create-account">Create Account</h2>
        <form action="" className="signup-form">
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required={true}
          />{" "}
          <br />
          <label htmlFor="phone-number">Phone Number</label> <br />
          <input
            type="number"
            name="number"
            value={user.number}
            placeholder="eg. 670000000"
            onChange={handleChange}
            required={true}
          />{" "}
          <br />
          <div className="gender-dob">
            <div>
              <label htmlFor="gender">Gender</label> <br />
              <select
                name="gender"
                id="gender"
                value={user.gender}
                onChange={handleChange}
                required={true}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob">DoB</label> <br />
              <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required={true}
          />
          <button className="sign-up-button" type="button" onClick={submit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
