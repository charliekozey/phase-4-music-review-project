import React, {useState, useEffect} from "react"
import CarouselDisplay from "./CarouselDisplay"
import ReviewsContainer from "./ReviewsContainer"
import ReviewList from "./ReviewList"


function Home({currentUser}) {
    const [mostPopular, setMostPopular] = useState()
    const [mostRecent, setMostRecent] = useState()

    useEffect(() => {
        fetch('/top_reviews')
        .then(res => res.json())
        .then(reviews => setMostPopular(reviews))
    }, [])
    
    useEffect(() => {
        fetch('/new_reviews')
        .then(res => res.json())
        .then(reviews => setMostRecent(reviews))
    }, [])

    return (
        <div className="home">
            <CarouselDisplay />
            <div id="home-list-container">
                <div className="home-page-list">
                    <h3>Highest Reviews</h3>
                    {mostPopular && <ReviewList reviews={mostPopular} />}
                </div>
                <div className="home-page-list">
                    <h3>Recent Reviews</h3>
                    {mostRecent && <ReviewList reviews={mostRecent} />}
                </div>
            </div>
        </div>
    )
}


export default Home