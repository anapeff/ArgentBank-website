import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName, fetchUserProfile } from '../../redux/actions/profileActions';


const EditProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.profile.userProfile);
  const [newUserName, setNewUserName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const tokenLocal = localStorage.getItem('token');
    const tokenSession = sessionStorage.getItem('token');
    
    if (tokenLocal || tokenSession) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateUserName = async () => {
    if (newUserName) {
      dispatch(updateUserName(newUserName));
      setIsEditing(false);
      setNewUserName('');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="edit-form">
      {isEditing ? (
        <>
          <h1 className='welcome-user'>Edit User Infos</h1>
          <div className='edit'>
            <label htmlFor="newUserName">User Name :</label>
            <input
              type="text"
              id="newUserName"
              placeholder= {userProfile.userName}
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className='edit'>
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id="firstName"
              value={userProfile.firstName}
              disabled
              className='text_input'
            />
          </div>
          <div className='edit'>
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id="lastName"
              value={userProfile.lastName}
              disabled
              className='text_input'
            />
          </div>
          <div className="buttons-form">
            <button onClick={handleUpdateUserName} className="edit-button">Save</button>
            <button onClick={handleCancel} className="edit-button">Cancel</button>
          </div>
        </>
      ) : (
        <div>
          <h1 className='welcome-user'>Welcome back {userProfile.userName} !</h1>
          <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
        </div>
      )}
    </div>
  );
};

export default EditProfile;