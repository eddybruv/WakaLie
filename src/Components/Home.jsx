import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="welcome-page">
      <div className="welcome">
        <h2>
          Welcome to <h1>WakaLie</h1>
        </h2>
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
