import React from "react";
import { Link } from "react-router-dom";

function UserPanel() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));  

  const onLogOut = () => {
    window.localStorage.clear();
  };
  return (
    <div className="user-panel">
      <img src={currentUser.imageUrl} alt="" className="user-img" />
      <p className="username">{currentUser.name}</p>
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
        {/* <li>
          <Link to="/update">Profile</Link>
        </li> */}
      </ul>

      <p className="logout">
        <Link to="/home" onClick={onLogOut}>
          Logout
        </Link>
      </p>
    </div>
  );
}

export default UserPanel;
