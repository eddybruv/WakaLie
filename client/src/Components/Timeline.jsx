import React, { useEffect, useState } from "react";
import UserPanel from "./UserPanel";
import Card from "./Card";
import axios from "axios";

function Timeline() {
  const [posts, setPosts] = useState(null);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const fetchServer = async () => {
      const result = await axios
        .post("/api/post/user_posts", { _id: user._id })
        .then((data) => data.data)
        .catch(() => console.log("Doesnt work"));
      setPosts(result);
    };

    fetchServer();
  }, []);

  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <UserPanel />
        <div className="feed">
          <p className="feed-text">Your Posts</p>
          {posts?.map((post, index) => {
            return <Card key={index} image={post.user_id.imageUrl} name={post.user_id.name} message={post.message} time={post.createdAt}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
