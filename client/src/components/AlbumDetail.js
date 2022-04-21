import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from 'react-router-dom';
import ReviewList from "./ReviewList";
import ReviewDetail from "./ReviewDetail";

function AlbumDetail({ currentUser }) {
    const { id } = useParams();
    const [album, setAlbum] = useState();
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory()
    
    useEffect(() => {
        fetch(`/albums/${id}`)
        .then(res => res.json())
        .then(album => {
            setAlbum(album)
            setIsLoaded(true)
        })
    }, [id])
    
    function handleLeaveReview() {
        currentUser ? history.push(`/albums/${id}/reviews/new`) : history.push(`/login`)
    }

    return (
        <>
            {isLoaded ?   
            <div className="album-detail">
                <img src={album.album_art_url} alt={album.title} />
                <h3 className="album-detail-title">{album.title}</h3>
                <h4 className="album-detail-artist">{album.artist}</h4>
                <button onClick={() => handleLeaveReview()}>Leave a Review</button>
                <ReviewList reviews={album.reviews} album={album} currentUser={currentUser} />
            </div> : <div>loading...</div>}
        </>
    )
    
}

export default AlbumDetail