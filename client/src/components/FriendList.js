import React from "react";
import { Link } from 'react-router-dom'

function FriendList({followers, following}) {
    const followingDivs = following.map(f => {
        return <Link to={`/users/${f.id}`}><span class="user">{f.username}</span></Link>
    })
    
    const followersDivs = followers.map(f => {
        return <Link to={`/users/${f.id}`}><span class="user">{f.username}</span></Link>
    })
    return (
        <div className="friend-list">
            <div className="followers-list">
                <h3>Peeple who follow u</h3>
                {followersDivs}
            </div>
            <div className="followers-list">
                <h3>Peeple u follow</h3>
                {followingDivs}
            </div>
        </div>
    )
}

export default FriendList