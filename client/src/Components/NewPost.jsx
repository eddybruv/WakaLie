import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";
import axios from "axios";

function NewPost() {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const submit = async () => {
    const response = await axios.post(
      "/api/post/create_post",
      { message, user_id: currentUser._id }
    );

    if (response.status === 200) {
      alert("post sent");
      navigate("/feed");
    } else {
      alert("Post not sent");
    }
  };
  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <UserPanel />
        <div className="feed">
          <p className="feed-text">What's on your mind?</p>
          <form className="post-form">
            <textarea
              onChange={handleChange}
              name="new-post"
              id="new-post"
            ></textarea>{" "}
            <br />
            <button onClick={submit} type="button">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
