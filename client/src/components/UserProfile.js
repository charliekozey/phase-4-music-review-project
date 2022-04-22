import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import FriendList from "./FriendList";
import { useParams } from "react-router-dom";

function UserProfile({currentUser}) {

    const [user, setUser] = useState()
    const { id } = useParams()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`/users/${id}/other_user`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setIsLoaded(true)
            })
    }, [id])

    function handleFollow() {
        fetch('/relationships', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({id: user.id})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setUser({...user, followers: [...user.followers, currentUser]})
        })
        .catch(error => console.log(error))
    }

    function handleUnfollow(){
        fetch(`/relationships/${user.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({current_user_id: currentUser.id})
        })
        .then(res=> res.json())
        .then(data => {
            setUser({...user, followers: user.followers.filter(u => u.id !== currentUser.id)})
            console.log(data)
            console.log("Unfollowed ur nice friend")

        }).catch(e => console.log(e))
    }

    function checkUserId(userID){
        return currentUser && currentUser.following.some(u => u.id == userID)
    }
    

    return (
        <div>
        {isLoaded ?
            currentUser ? 
                <div className="user-profile" id="user-profile">
                    <h1 className="profile-title">{user.username}</h1>
                    {user.id === currentUser.id ?
                        <>
                            {user.reviews && <ReviewList reviews={user.reviews} user={user} />}
                            <FriendList following={user.following} followers={user.followers}/>
                        </> : 
                        <> 
                        {checkUserId(user.id) ?
                            <button id="unfollow" onClick={() => handleUnfollow()}>Unfollow me</button> :
                            <button id="follow" onClick={() => handleFollow()}>Follow me</button>}

                        {user.reviews && <ReviewList reviews={user.reviews} user={user} />}
                        <FriendList following={user.following} followers={user.followers}/>
                        </>
                    }
                </div> :
                    <div className="user-profile" id="user-profile">
                        <h1 className="profile-title">{user.username}</h1>
                        {user.reviews && <ReviewList reviews={user.reviews} user={user} />}
                        <FriendList following={user.following} followers={user.followers}/>
                    </div> :

            <div>Loading...</div>
        }
        </div>
    )

}

export default UserProfile