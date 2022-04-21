import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function ReviewDetail({ currentUser }) {

    const [review, setReview] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const { reviewID } = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/reviews/${reviewID}`)
            .then(res => res.json())
            .then(data => {
                
                setReview(data)
                setIsLoaded(true)

                console.log(`the good shit: ${data}`)
            })
    }, [reviewID])

    function handleEditReview(e) {
        e.preventDefault()

        fetch(`/reviews/${reviewID}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({rating: review.rating, review_text: review.review_text})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(`updated review info: ${data}`)
        })
        .catch(error => console.log(error))

        setIsEditing(false)
    }

    function handleDeleteReview() {
        fetch(`/reviews/${reviewID}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            console.log(`deleted review`)
            history.push(`/albums/${review.album.id}`)
        })
        .catch(error => console.log(error))

        setIsEditing(false)

    }

    return (
        <div className="review-detail">
            {isLoaded && 
                <div>
                    <div>{review.album.artist}, <em>{review.album.title}</em></div>
                    <Link to={`/albums/${review.album.id}`}><img style={{height: '50px', width:'50px'}} src={review.album.album_art_url} alt="cover" /></Link>
                    <div>
                        {isEditing ? 
                            <form onSubmit={(e) => handleEditReview(e)}>
                            <label htmlFor="rating">Update rating:</label>
                            <select 
                                name="rating" 
                                id="rating" 
                                value={review.rating} 
                                onChange={(e) => setReview({...review, rating: parseInt(e.target.value)})}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <label htmlFor="review-text">Update review:</label>
                            <textarea 
                                name="review-text" 
                                id="review-text" 
                                value={review.review_text} 
                                onChange={(e) => setReview({...review, review_text: (e.target.value)})}
                            >
                            </textarea>
                            <input type="submit" value="Update"></input>
                        </form>
                        : <div>
                            <div>{review.rating}</div>
                            <div>{review.review_text}</div>
                            {review.user.id === currentUser.id &&
                                <div>
                                    <button onClick={() => setIsEditing(!isEditing)}>Edit review</button>
                                    <button onClick={() => handleDeleteReview()}>Delete review</button>
                                </div> 
                            }
                            </div>
                        }
                        
                    </div>
                    <div>Review by: 
                        <span class="user">
                            <Link to={`/users/${review.user.id}`}>{review.user.username}</Link>
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default ReviewDetail