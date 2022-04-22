import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({reviews, album, user=false}) {
    console.log(reviews)
    const reviewList = reviews.map(review => {
        return (
            user ? <ReviewCard review={review} album={review.album || album} user={user} /> : <ReviewCard review={review} album={review.album || album} />
        )
    })
    return (
        <div className="review-list">
            {reviewList}
        </div>
    )
}

export default ReviewList