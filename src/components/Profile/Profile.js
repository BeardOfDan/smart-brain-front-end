import React from 'react';
import './Profile.css';

const Profile = ({ isProfileOpen, toggleModal }) => {
  return (
    <div className="profile-modal">
      <button onClick={toggleModal}>Click Me</button>
    </div>
  );
};

export default Profile;
