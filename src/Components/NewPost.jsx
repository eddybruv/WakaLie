import React from "react";
import { useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";

function NewPost() {
  let navigate = useNavigate();
  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <UserPanel />
        <div className="feed">
          <p className="feed-text">What's on your mind?</p>
          <form className="post-form" action="" method="post">
            <textarea name="new-post" id="new-post"></textarea> <br />
            <button onClick={() => {
              navigate('/feed');
            }} type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
