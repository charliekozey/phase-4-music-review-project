import React from "react";
import ReviewList from "./ReviewList";
import ReviewDetail from "./ReviewDetail";

function AlbumDetail() {
    return (
        <div className="album-detail">
            album detail
            <ReviewList />
            <ReviewDetail />
        </div>
    )
}

export default AlbumDetail