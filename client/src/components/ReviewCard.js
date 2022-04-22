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
                        <div className="album-art-with-rating" style={{backgroundImage: `url(${album.album_art_url})`, maxheight: '100px', maxwidth:'100px', minheight: '100px', minwidth:'100px'}}>
                            <h4>{review.rating}</h4>
                        </div>
                        <div className="album-artist-review-container">
                            {(location.pathname !== `/albums/${album.id}`) && <div className="artist-and-album">
                                <h3><em>{album.title}</em> — {album.artist}</h3>
                            </div>
                            }
                            <div className="lil-review">
                                <p>{lilReview}... </p>
                            </div>
                        </div>
                    
                
                <div className="user-block">
                    {user ? 
                        
                            <div className="user">
                                review by: <Link to={`/users/${user.id}`}>{user.username}</Link>
                            </div>
                        : 
                            <div className="user">
                                review by: <Link to={`/users/${review.user.id}`}>{review.user.username}</Link>
                            </div>
                    }
                </div>
                </div>
                </Link>
            </>
        
    )
}

export default ReviewCard