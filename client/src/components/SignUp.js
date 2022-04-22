import React, { useState } from 'react'

export default function SignUp() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleCreateAccount(e) {
        e.preventDefault()

        fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        .catch(error => console.log(error))
    }


    return (
        <div classnName="user-form">
            <h2>Sign Up</h2>
            <form onSubmit={(e) => handleCreateAccount(e)}>
                <label>
                    Username: 
                    <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                </label>
                <label>
                    Password: 
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                </label>
                <label>
                    Confirm Password: 
                    <input type="password" name="confirm-password" id="confirm-password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </label>
                <input type="submit" value="Sign Up">
                </input>
            </form>
        </div>

    )
}
