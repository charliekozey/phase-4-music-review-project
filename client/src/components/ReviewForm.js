import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';

function ReviewForm({ currentUser }) {

    const [rating, setRating] = useState()
    const [reviewText, setReviewText] = useState()
    const [errors, setErrors] = useState()
    const albumID = useParams().id
    const history = useHistory()
    
    function handleSubmit(e) {
        e.preventDefault()

        fetch('/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({rating: rating, review_text: reviewText, user_id: currentUser.id, album_id: albumID})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.errors){
                setErrors(data.errors)
            }
            else{
                history.push(`/albums/${albumID}`)
            }
        })
    }
    
    return (
        <div className="form-container">
            <h2>Leave a Review</h2>
            {errors && errors.map(e => <h4 style={{color: "red"}}>{e}</h4>)}
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="rating">Choose a rating:</label>
                <select 
                    required
                    name="rating" 
                    id="rating" 
                    value={rating} 
                    onChange={(e) => setRating(parseInt(e.target.value))}
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
                <label htmlFor="review-text">Leave a review:</label>
                <textarea 
                    name="review-text" 
                    id="review-text" 
                    placeholder="This album changed my life..." 
                    value={reviewText} 
                    onChange={(e) => setReviewText(e.target.value)}
                >
                </textarea>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
    
}

export default ReviewForm