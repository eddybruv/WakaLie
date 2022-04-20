import React, { } from "react";
import { Link } from "react-router-dom";

function UserPanel() {
  

  return (
    <div className="user-panel">
      <img
        src="https://avatars.githubusercontent.com/u/80322163?v=4"
        alt=""
        className="user-img"
      />
      <p className="username">Eddy Bruv</p>
      <div className="line"></div>
      <ul>
        <li>
          <Link to="/feed">Daily Feed</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/new">New Post</Link>
        </li>
        <li>
          <Link to="/update">Profile</Link>
        </li>
      </ul>

      <p className="logout">
        <Link to="/home">Logout</Link>
      </p>
    </div>
  );
}

export default UserPanel;
