import LoadingSpinner from "../common/LoadingSpinner";
import ErrorHandling from "../common/ErrorHandling";
import ProfileHeader from "./ProfileHeader";
import PostList from "../post/PostList";
import { useState } from "react";

const UserProfilePresenter = ({ user, posts, loading, error, onRetry, onUpdateUser }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  if (loading) {
    return <LoadingSpinner message="Loading User Profile..." />;
  }

  if (error) {
    return (
      <ErrorHandling
        title="Something went wrong..."
        message={error}
        onRetry={onRetry}
      />
    );
  }

  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData)
    if(result.success){
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false)

    if(userData){
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio,
      })
    }
  }

    const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    
  };

  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        onStartEdit={()=>setIsEditing(true)}
        onInputChange={handleInputChange} 
        onCancelEdit={handleCancelEdit}
        onSaveProfile={handleSaveProfile}
      />
      <PostList posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;
