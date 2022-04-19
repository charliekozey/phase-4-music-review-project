import React from "react";

function CarouselSlide({ topAlbum }) {
    console.log( topAlbum )
    return (
        <div>
            <img alt="" src="https://picsum.photos/id/237/200/300" />
            <p className="legend">{ topAlbum.title }</p>
        </div>
    )
}

export default CarouselSlide