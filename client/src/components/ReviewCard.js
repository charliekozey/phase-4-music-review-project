import React from "react";
import { Link } from "react-router-dom";

function ReviewCard({review, user=false}) {
    const lilReview = review.review_text.slice(0, 75)
    console.log(review)
    console.log(review.user)
    return (
        <div className="review-card">
            <span>{review.rating} </span>
            <span>{lilReview}... </span>
            {user ? 
                <span>By: <Link to={`/users/${user.id}`}>{user.username}</Link></span> : 
                <span>By: <Link to={`/users/${review.user.id}`}>{review.user.username}</Link></span>
            }
        </div>
    )
}

export default ReviewCard