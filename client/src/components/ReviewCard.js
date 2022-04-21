import React from "react";
import { Link, useLocation } from "react-router-dom";

function ReviewCard({review, album, user=false}) {
    const lilReview = review.review_text.slice(0, 75)
    console.log(album)
    const location = useLocation()
    console.log(location)

    return (
        
            <div className="review-card">
                {location.pathname === '/' && <div>{album.title} - {album.artist}</div>}
                <Link to={`/albums/${album.id}/reviews/${review.id}`}>
                    <div>
                        <span>{review.rating} </span>
                        <span>{lilReview}... </span>
                    </div>
                </Link>
                {user ? 
                    <span>By: 
                        <span class="user">
                            <Link to={`/users/${user.id}`}>{user.username}</Link>
                        </span>
                    </span> : 
                    <span>By: 
                        <span class="user">
                            <Link to={`/users/${review.user.id}`}>{review.user.username}</Link>
                        </span>
                    </span>
                }
            </div>
        
    )
}

export default ReviewCard