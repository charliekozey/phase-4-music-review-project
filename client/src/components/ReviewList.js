import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({reviews, album, user=false}) {
    const reviewList = reviews.map(review => {
        return (
            user ? <ReviewCard review={review} album={review.album || album} user={user} /> : <ReviewCard review={review} album={review.album || album} />
        )
    })
    return (
        <div className="review-list">
            Reviews:
            {reviewList}
        </div>
    )
}

export default ReviewList