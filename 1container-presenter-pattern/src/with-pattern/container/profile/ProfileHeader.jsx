const ProfileHeader = ({
  user,
  isEditing,
  formData,
  onStartEdit,
  onInputChange,
  onCancelEdit,
  onSaveProfile,
}) => {
  return (
    <div className="profile-header">
      <img
        src={user.avatar || "/default-avatar.png"}
        alt={`${user.name}'s avatar`}
        className="avatar"
      />
      {!isEditing ? (
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p className="email">{user.email}</p>
          <p className="bio">{user.bio}</p>
          <button onClick={() => setIsEditing(true)} className="edit-btn">
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="profile-form">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Email"
          />
          <textarea
            value={formData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            placeholder="Bio"
          />
          <div className="form-actions">
            <button onClick={() => setIsEditing(false)}>Cancel</button>
            <button onClick={handleSaveProfile}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
