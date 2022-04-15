import React from "react";
import UserPanel from "./UserPanel";
import Card from './Card'

function Timeline() {
  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <UserPanel/>
        <div className="feed">
          <p className="feed-text">Your Posts</p>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
