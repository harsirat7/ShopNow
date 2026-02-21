import React, { useState } from 'react';
import "../CSS/UserProfile.css";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    firstName: 'Harsirat',
    lastName: 'Singh',
    email: 'harsirat@example.com',
    phone: '+1 (555) 123-4567'
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);

  const handleInputChange = (field, value) => {
    setEditedProfile({ ...editedProfile, [field]: value });
  };

  const handleSaveProfile = () => {
    setUserProfile(editedProfile);
    setIsEditingProfile(false);
  };

  return (
    <React.Fragment>
      <div className="UserProfileMainContainer">
        {/* Profile Header Section */}
        <div className="profileHeaderSection">
          <div className="profileAvatarContainer">
            <div className="profileAvatar">
              <span className="avatarInitials">{userProfile.firstName.charAt(0)}{userProfile.lastName.charAt(0)}</span>
            </div>
          </div>
          <div className="profileHeaderInfo">
            <h2 className="profileUsername">{userProfile.firstName} {userProfile.lastName}</h2>
            <p className="profileMemberSince">Member Account</p>
          </div>
        </div>

        {/* Profile Information Section */}
        <div className="profileSection">
          <div className="sectionHeader">
            <h3 className="sectionTitle">Personal Information</h3>
            <button 
              className="editButton"
              onClick={() => {
                setIsEditingProfile(!isEditingProfile);
                setEditedProfile(userProfile);
              }}
            >
              {isEditingProfile ? 'Cancel' : 'Edit'}
            </button>
          </div>

          {isEditingProfile ? (
            <div className="editFormContainer">
              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">First Name</label>
                  <input
                    type="text"
                    className="formInput"
                    value={editedProfile.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label className="formLabel">Last Name</label>
                  <input
                    type="text"
                    className="formInput"
                    value={editedProfile.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">Email</label>
                  <input
                    type="email"
                    className="formInput"
                    value={editedProfile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label className="formLabel">Phone</label>
                  <input
                    type="tel"
                    className="formInput"
                    value={editedProfile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <button className="saveButton" onClick={handleSaveProfile}>
                Save Changes
              </button>
            </div>
          ) : (
            <div className="profileInfoGrid">
              <div className="infoCard">
                <label className="infoLabel">First Name</label>
                <p className="infoValue">{userProfile.firstName}</p>
              </div>
              <div className="infoCard">
                <label className="infoLabel">Last Name</label>
                <p className="infoValue">{userProfile.lastName}</p>
              </div>
              <div className="infoCard">
                <label className="infoLabel">Email</label>
                <p className="infoValue">{userProfile.email}</p>
              </div>
              <div className="infoCard">
                <label className="infoLabel">Phone</label>
                <p className="infoValue">{userProfile.phone}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}