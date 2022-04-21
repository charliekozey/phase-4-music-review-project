import React from "react"
import reactRouterDom, {Link} from "react-router-dom"
import NavBar from "./NavBar"

function Header( {currentUser, onLogout} ){
    
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <>
        <div className="header">
            <Link to="/"><h1>ZOUNDD</h1></Link>
            <div className="log-in">
                { currentUser ? 
                    <>
                        <Link to={`/users/${currentUser.id}`}><span>{currentUser.username}</span></Link>
                        <button onClick={handleLogout}>Logout</button>
                    </> : 
                    <>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </div>
        <NavBar />
        </>
    )
}

export default Header