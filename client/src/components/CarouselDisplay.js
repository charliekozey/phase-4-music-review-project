import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselSlide from "./CarouselSlide";


function CarouselDisplay() {

    // get request from /highest_rated_albums
    // data to work with , put in state.
    const [top5, setTop5] = useState([])

    useEffect(() => {
        fetch('/highest_rated_albums')
            .then(response => response.json())
            .then(data => setTop5(data));
    }, []);

    const mapTop5 = top5.map(topAlbum => {
        return (
            <CarouselSlide key={top5.id} topAlbum={topAlbum}/>
        )
    }
    )

    return (
        <Carousel autoPlay className="carousel">
            {mapTop5}
            {/* <div>
                <img alt="" src="https://picsum.photos/id/237/200/300" />
                <p className="legend">{top5[0].title}</p>
            </div>
            <div>
                <img alt="" src="https://picsum.photos/seed/picsum/200/300" />
                <p className="legend">Album 2</p>
            </div>
            <div>
                <img alt="" src="https://picsum.photos/200/300?grayscale" />
                <p className="legend">Album 3</p>
            </div>
            <div>
                <img alt="" src="https://i.picsum.photos/id/288/200/200.jpg?hmac=PrR6Ld35xhRNiCKOIS-dmUjGl-L-3ylEddVJrdwCAHw" />
                <p className="legend">Album 4</p>
            </div>
            <div>
                <img alt="" src="https://i.picsum.photos/id/288/200/200.jpg?hmac=PrR6Ld35xhRNiCKOIS-dmUjGl-L-3ylEddVJrdwCAHw" />
                <p className="legend">Album 5</p>
            </div> */}
        </Carousel>
    )
}

export default CarouselDisplay