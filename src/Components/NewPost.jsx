import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";
import axios from "axios";

function NewPost() {
  let navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem("user_id", "6255ba50e22e15757a61a147");
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const submit = async() => {
    console.log(message);
    const response = await axios.post('http://localhost:5000/api/post/create_post', {message, user_id: localStorage.getItem('user_id')});

    if (response.status === 200) {
      console.log('post sent')
      navigate('/feed');
    } else {
      alert('Post not sent');
    }
  }
  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <UserPanel />
        <div className="feed">
          <p className="feed-text">What's on your mind?</p>
          <form className="post-form">
            <textarea onChange={handleChange} name="new-post" id="new-post"></textarea> <br />
            <button onClick={submit} type="button">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
