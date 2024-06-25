const EditProfile = () => {
return (
    <div className="edit-form">
    
          <h1 className='welcome-user'>Edit User Infos</h1>
          <div className='edit'>
            <label htmlFor="newUserName">User Name :</label>
          
          </div>
          <div className='edit'>
            <label htmlFor="firstName">First Name :</label>
          
          </div>
          <div className='edit'>
            <label htmlFor="lastName">Last Name :</label>
    
          </div>
          <div className="buttons-form">
            <button className="edit-button">Save</button>
            <button className="edit-button">Cancel</button>
          </div>
   
    </div>
  );
};

export default EditProfile;