import React from "react";
import ReviewList from "./ReviewList";

function ReviewsContainer() {
    return (
        <div className="reviews-container">
            reviews container
            {/* <GlobalState />
            <FriendsState /> */}
            <ReviewList />
            <ReviewList />
            <ReviewList />
        </div>
    )
}

export default ReviewsContainer