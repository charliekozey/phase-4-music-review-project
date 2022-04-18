import React from "react";
import ReviewList from "./ReviewList";
import FriendList from "./FriendList";


function UserProfile() {
    return (
        <div className="user-profile">
            user profile
            <ReviewList />
            <FriendList />
        </div>
    )
}

export default UserProfile