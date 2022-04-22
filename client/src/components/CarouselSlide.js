import React from "react";
import { Link } from "react-router-dom"


function CarouselSlide({ topAlbum }) {
    console.log( topAlbum )


    return (
        <div>
            <Link to={`albums/${topAlbum.id}`}>
            <img alt="" src={ topAlbum.album_art_url } />
            <h2 className="carousel-artist">{ topAlbum.artist }</h2>
            <h2 className="carousel-title"><em>{ topAlbum.title }</em></h2>
            <h2 className="carousel-rating">
                {topAlbum.average_rating !== 0.0 ? `${topAlbum.average_rating}/10` : 'no ratings yet' }
            </h2>
            </Link>
        </div>
    )
}

export default CarouselSlide