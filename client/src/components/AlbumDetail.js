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
                <h2 className="album-detail-title"><em>{album.title}</em></h2>
                <h3 className="album-detail-artist">{album.artist}</h3>
                <h4 className="album-detail-avg-rating">
                    {album.average_rating !== 0.0 ? `Average rating: ${Math.round(album.average_rating * 10) / 10}/10` : 'no ratings yet' }
                </h4>
                <button onClick={() => handleLeaveReview()}>Leave a Review</button>
                <div style={{width: "30%", margin: "20px auto"}}>
                    <ReviewList reviews={album.reviews} album={album} currentUser={currentUser} />
                </div>
            </div> : <div>loading...</div>}
        </>
    )
    
}

export default AlbumDetail