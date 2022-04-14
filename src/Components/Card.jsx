import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function Card() {
  /* const [showOptions, setShowOptions] = useState(false);

  const handleOptions = (e) => {
    if(!showOptions) {
      e.className.add('me')
      setShowOptions(true);
    }
  } */
  return (
    <div className="personal-card">
      <img src="https://avatars.githubusercontent.com/u/80322163?v=4" alt="" />
      <div className="name-time-message">
        <p className="user-name">Eddy Bruv</p>
        <p className="time">01:30 pm</p>
        <p className="message">
          Hello everyone, I just joined WakaLie and I kinda find it cool as I
          get to speak freely and safely.
        </p>
      </div>
      <FontAwesomeIcon className="ellipsis" icon={faEllipsisVertical} />
    </div>
  );
}

export default Card