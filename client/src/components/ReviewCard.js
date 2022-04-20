import React from "react";

function ReviewCard({review}) {
    console.log(review)
    const lilReview = review.review_text.slice(0, 75)
    return (
        <div className="review-card">
            <span>{review.rating} </span>
            <span>{lilReview}... </span>
            <span>By: {review.user.username}</span>
        </div>
    )
}

export default ReviewCard