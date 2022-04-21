import React from "react";

function CarouselSlide({ topAlbum }) {
    console.log( topAlbum )

    return (
        <div>
            <img alt="" src={ topAlbum.album_art_url } />
            <p className="carousel-artist">{ topAlbum.artist }</p>
            <p className="carousel-title">{ topAlbum.title }</p>
        </div>
    )
}

export default CarouselSlide