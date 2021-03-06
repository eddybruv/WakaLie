import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  window.localStorage.clear();
  return (
    <div className="welcome-page">
      <div className="welcome">
        <div className="welcome-header">
          <h2>Welcome to </h2>
          <h1>WakaLie</h1>
        </div>

        <p className="welcome-text">
          Write out your thoughts and free your mind ✨ <br /> Unlock freedom
          ...
        </p>

        <div className="signup-login">
          <div className="signup-text">
            <p>New to WakaLie? </p>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
          </div>
          <div className="login-text">
            <p>Already have an account? </p>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
