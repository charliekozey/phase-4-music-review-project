import React from "react"
import NavBar from "./NavBar"

function Header(){
    return (
        <>
        <div className="header">
            <h1>ZOUNDD</h1>
            <div className="log-in">
                <a href="#">Login</a>
                <a href="#">Signup</a>
            </div>
        </div>
        <NavBar />
        </>
    )
}

export default Header