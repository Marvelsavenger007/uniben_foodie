import React, { useState } from "react";
import "./profile.css"
import avatar from "../../images/profile.jpg";


const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        profilePicture: avatar,
        name: "David Irabor",
        email: "blessedirabor04@gmail.com",
        homeAddress: "46 GRA Benin city, Edo State",
        sex: "Male",
        dob: "2003-10-30",
        phone: "+234-815-691-6112",
        password: "********",
    });

    const [newPassword, setNewPassword] = useState(profileData.password);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const saveChanges = () => {
        setProfileData({ ...profileData, password: newPassword });
        setIsEditing(false);
    };

    return (
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-picture">
                    <img src={profileData.profilePicture} alt="Profile" />
                </div>
                <div className="profile-fields">
                    <div className="field">
                        <label>Name:</label>
                        {isEditing ? (
                            <input
                                type="name"
                                name="name"
                                value={profileData.name}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{profileData.name}</span>
                        )}
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{profileData.email}</span>
                        )}
                    </div>
                    <div className="field">
                        <label>Home Address:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="homeAddress"
                                value={profileData.homeAddress}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{profileData.homeAddress}</span>
                        )}
                    </div>
                    <div className="field">
                        <label>Sex:</label>
                        {isEditing ? (
                            <select
                                name="sex"
                                value={profileData.sex}
                                onChange={handleInputChange}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        ) : (
                            <span>{profileData.sex}</span>
                        )}
                    </div>
                    <div className="field">
                        <label>Date of Birth:</label>
                        {isEditing ? (
                            <input
                                type="date"
                                name="dob"
                                value={profileData.dob}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{profileData.dob}</span>
                        )}
                    </div>
                    <div className="field">
                        <label>Phone Number:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{profileData.phone}</span>
                        )}
                    </div>
                    <div className="field">
                        <label>Password:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        ) : (
                            <span>{profileData.password}</span>
                        )}
                    </div>
                </div>
                <div className="buttons">
                    {isEditing ? (
                        <>
                            <button onClick={saveChanges}>Save</button>
                            <button onClick={toggleEdit}>Cancel</button>
                        </>
                    ) : (
                        <button onClick={toggleEdit}>Edit Profile</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
