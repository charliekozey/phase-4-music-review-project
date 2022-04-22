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
                    <h1>
                        {review.album.artist}, <Link to={`/albums/${review.album.id}`}>
                            <em>{review.album.title}</em>
                        </Link>
                    </h1>
                    <h2>{review.rating}/10</h2>
                    <Link to={`/albums/${review.album.id}`}><img style={{height: '250px', width:'250px'}} src={review.album.album_art_url} alt="cover" /></Link>
                    <div>
                        {isEditing ? 
                            <form className="edit-review-form" onSubmit={(e) => handleEditReview(e)}>
                            <div className="update-item">
                            <label htmlFor="rating">Update rating: </label>
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
                            </div>
                            <label htmlFor="review-text" className="update-item">Update review:</label>
                            <textarea 
                                name="review-text" 
                                id="review-text" 
                                className="update-item"
                                value={review.review_text} 
                                onChange={(e) => setReview({...review, review_text: (e.target.value)})}
                            >
                            </textarea>
                            <input type="submit" value="Update"></input>
                        </form>
                        : <div>
                            
                            <div className="review-text">{review.review_text}</div>
                            {review.user.id === currentUser.id &&
                                <div className="button-container">
                                    <button onClick={() => setIsEditing(!isEditing)}>Edit review</button>
                                    <button onClick={() => handleDeleteReview()}>Delete review</button>
                                </div> 
                            }
                            </div>
                        }
                        
                    </div>
                    <div className="review-by">review by: 
                        <span className="user">
                            <Link to={`/users/${review.user.id}`}>{review.user.username}</Link>
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default ReviewDetail