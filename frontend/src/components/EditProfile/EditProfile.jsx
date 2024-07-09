import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName, fetchUserProfile } from '../../redux/slices/profileSlice';

const EditProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.profile.userProfile);
  const [newUserName, setNewUserName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(() => {
    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

  // Passer en mode édition
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Mettre à jour le nom d'utilisateur
  const handleUpdateUserName = () => {
    if (newUserName) {
      dispatch(updateUserName(newUserName));
      setNewUserName('');
      setIsEditing(false);
    }
  };

  // Annuler l'édition
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="edit-form">
      {isEditing ? (
        <>
          <h1 className='welcome-user'>Edit user info</h1>
          <div className='edit'>
            <label htmlFor="newUserName">User name</label>
            <input
              type="text"
              id="newUserName"
              placeholder={userProfile.userName}
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className='edit'>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={userProfile.firstName}
              disabled
              className='text_input'
            />
          </div>
          <div className='edit'>
            <label htmlFor="lastName">Last name</label>
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
          <h1 className='welcome-user'>Welcome {userProfile.userName} !</h1>
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditProfile;

