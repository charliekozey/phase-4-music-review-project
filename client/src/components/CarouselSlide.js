import React from "react";
import { Link } from "react-router-dom"
// import { useHistory } from 'react-router-dom'


function CarouselSlide({ topAlbum }) {
    console.log( topAlbum )
    // let history = useHistory();

    // function handleClick() {
    //     history.push(`albums/${topAlbum.id}`)
    // }


    return (
        <div>
            <Link to={`albums/${topAlbum.id}`}>
            <img alt="" src={ topAlbum.album_art_url } />
            <p className="carousel-artist">{ topAlbum.artist }</p>
            <p className="carousel-title">{ topAlbum.title }</p>
            </Link>
        </div>
    )
}

export default CarouselSlide