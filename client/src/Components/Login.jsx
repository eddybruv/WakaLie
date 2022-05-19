import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const checkProperties = (user) => {
    if (user.email === "" || user.password === "") {
      alert("Please fill all input fields!");
      setUser({ email: "", password: "" });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (checkProperties(user)) {
      const result = await axios.post(
        "/api/user/login",
        user
      );
      if (result.status === 200) {
        if(result.data.message === 'User not found') {
          alert('User not found!\n Correct details or Sign up!');
          setUser({ email: "", password: "" });
        } else {
          console.log(result.data.user);
          const currentUser = result.data.user;
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          navigate("/feed");
        }
        
      } else {
        alert('User not found')
      }
    }
  };
  return (
    <div className="login">
      <div className="login-details">
        <h2 className="login-account">Login</h2>
        <form action="" className="login-form">
          <label htmlFor="email">Email</label> <br />
          <input
            onChange={handleChange}
            value={user.email}
            type="email"
            name="email"
            placeholder="example@domain.com"
          />{" "}
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            onChange={handleChange}
            value={user.password}
            type="password"
            name="password"
          />
          <button type="button" className="login-button" onClick={submit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
