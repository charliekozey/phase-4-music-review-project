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
            .then(data => {
                console.log(data)
                setTop5(data)
            });
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
        </Carousel>
    )
}

export default CarouselDisplay