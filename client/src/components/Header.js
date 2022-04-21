import React from "react"
import reactRouterDom, {Link, useHistory} from "react-router-dom"
import NavBar from "./NavBar"

function Header( {currentUser, onLogout} ){
    const history = useHistory();
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => {
            onLogout();
            history.push('/')
        });
    }

    return (
        <>
        <div className="header">
            <Link to="/"><h1>ZOUNDD</h1></Link>
            <div className="log-in">
                { currentUser ? 
                    <>
                        <Link to={`/users/${currentUser.id}`}><span class="user">{currentUser.username}</span></Link>
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