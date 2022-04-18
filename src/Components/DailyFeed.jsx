import React, { useEffect, useState } from "react";
import UserPanel from "./UserPanel";
import Card from "./Card";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState(null);

  const fetchServer = async () => {
    const result = await axios
      .get("http://localhost:5000/api/post/get_post")
    setComments(result.data);
  };

  useEffect(() => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }, [comments]);

  useEffect(() => {
    fetchServer();
  }, []);

  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <UserPanel />
        <div className="feed">
          <p className="feed-text">Daily Feed</p>
          {comments !== null &&
            comments
              .map((comment, index) => (
                <Card key={index}
                  message={comment.message}
                  name={comment.user_id.name}
                  time={comment.createdAt}
                />
              ))
              .reverse()}
        </div>
      </div>
    </div>
  );
}

export default Comments;
