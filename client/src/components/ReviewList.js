import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({reviews, user=false}) {
    const reviewList = reviews.map(review => {
        return (
            user ? <ReviewCard review={review} user={user}/> : <ReviewCard review={review}/>
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