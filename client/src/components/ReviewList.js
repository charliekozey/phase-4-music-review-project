import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({reviews}) {
    const reviewList = reviews.map(review => {
        return (
            <ReviewCard review={review} />
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