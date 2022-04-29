import React from 'react';
import UserPanel from './UserPanel';

function UpdateProfile() {
  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <UserPanel />
        <div className="feed">
          <p className="feed-text">Update Your Account Details</p>
          <div className="present-details">
            <h3>Current Information</h3>
            <p className="cur-name">
              Name : <span>Eddy Bruv</span>
            </p>
            <p className="password">
              Password : <span>bimamiA4</span>
            </p>
            <p className="cur-email">
              Email : <span>example@gmail.com</span>
            </p>
          </div>
          <div className="new-details">
            <h3>New Information</h3>
            <form action="/update" method='post'>
              <input type="text" name="name" placeholder="Enter Name" /> <br />
              <input type="tel" name="email" placeholder="Enter email" /> <br />
              <input type="password" name="password" placeholder="Enter Password" /> <br />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile