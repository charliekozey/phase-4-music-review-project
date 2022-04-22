import React from "react";
import { Link, useLocation } from "react-router-dom";

function ReviewCard({review, album, user=false}) {
    const lilReview = review.review_text.slice(0, 75)
    console.log(album)
    const location = useLocation()
    console.log(location)

    return (
        
            <>
                <Link to={`/albums/${album.id}/reviews/${review.id}`}>
                    <div className="review-card">
                        <div className="album-art-with-rating" style={{backgroundImage: `url(${album.album_art_url})`}}>
                            <h4>{review.rating} </h4>
                        </div>
                        <div className="album-artist-review-container">
                            {location.pathname === '/' && <div className="artist-and-album">
                                <h3><em>{album.title}</em> — {album.artist}</h3>
                            </div>
                            }
                            <div className="lil-review">
                                <p>{lilReview}... </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="">
                    {user ? 
                        
                            <div className="user">
                                By: <Link to={`/users/${user.id}`}>{user.username}</Link>
                            </div>
                        : 
                            <div className="user">
                                By: <Link to={`/users/${review.user.id}`}>{review.user.username}</Link>
                            </div>
                    }
                </div>
            </>
        
    )
}

export default ReviewCard