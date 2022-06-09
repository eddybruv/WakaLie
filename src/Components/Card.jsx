import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Card({ image, name, message, time }) {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="personal-card">
      <div className="img-div">
        <img src={image} alt="" />
      </div>
      <div className="name-time-message">
        <p className="user-name">{name}</p>
        <p className="time">
          {time.split("T")[1].slice(0, 5)} {time.split("T")[0]}
        </p>
        <p className="message">{message}</p>
      </div>
      <div onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon className="ellipsis" icon={faEllipsisVertical} />
        </div>
      <aside className={`card-menu ${isOpen? 'show'  : 'hide'}`}>
        <div className="card-menu-bg" onClick={() => setIsOpen(false)}></div>
        <ul>
          <li>Like</li>
          <li>Favorites</li>
          <li>Bookmark</li>
        </ul>
      </aside>
    </div>
  );
}

export default Card;
