import React, { useEffect, useState } from "react";
import UserPanel from "./UserPanel";
import Card from "./Card";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState(null);

  const fetchServer = async () => {
    const result = await axios
      .get("/api/post/get_post")
      .then((data) => data.data);
    setComments(result);
  };

  useEffect(() => {
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
                  image={comment.user_id.imageUrl}
                />
              ))
              .reverse()}
        </div>
      </div>
    </div>
  );
}

export default Comments;
