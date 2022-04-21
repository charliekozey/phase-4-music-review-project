import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import FriendList from "./FriendList";
import { useParams } from "react-router-dom";

function UserProfile() {

    const [user, setUser] = useState()
    const { id } = useParams()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`/users/${id}/other_user`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setUser(data)
                setIsLoaded(true)
                console.log(`album: ${data.reviews.album}`)
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
        })
        .catch(error => console.log(error))
    }

    

    return (
        <div>
        {isLoaded ? <div className="user-profile">
            {user.username}
            <button onClick={() => handleFollow()}>Follow me</button>
            <ReviewList reviews={user.reviews} user={user} />
            <FriendList />
        </div> : <div>Loading</div>}
        </div>
    )

}

export default UserProfile