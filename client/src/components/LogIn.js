import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LogIn({ setCurrentUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const history = useHistory();

    function handleLogIn(e) {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        })
        .then(res => res.json())
        .then(data =>{
            setCurrentUser(data)
            history.push('/')
        })
        .catch(error => console.log(error))
    }

    return (
        <div>Log In
            <form onSubmit={(e) => handleLogIn(e)}>
                <label>
                    Username:
                    <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                </label>
                <input type="submit" value="Log In">
                </input>
            </form>
        </div>

    )
}
