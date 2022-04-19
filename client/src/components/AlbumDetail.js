import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ReviewList from "./ReviewList";
import ReviewDetail from "./ReviewDetail";

function AlbumDetail() {
    const { id } = useParams();
    const [album, setAlbum] = useState();
    const [isLoaded, setIsLoaded] = useState(false)
    console.log(id)
    
    useEffect(() => {
        console.log(`/albums/${id}`)
        fetch(`/albums/${id}`)
        .then(res => res.json())
        .then(album => {
            setAlbum(album)
            setIsLoaded(true)
        })
    }, [id])
    
    return (
        <>
            {isLoaded ?   
            <div className="album-detail">
                <img src={album.album_art_url} alt={album.title} />
                <h3 className="album-detail-title">{album.title}</h3>
                <h4 className="album-detail-artist">{album.artist}</h4>
            </div> : <div>loading...</div>}
            <ReviewList />
            <ReviewDetail />
        </>
    )
    
}

export default AlbumDetail