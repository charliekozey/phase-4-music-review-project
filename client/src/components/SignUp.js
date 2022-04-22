import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignUp({ setCurrentUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors]= useState()
    const [confirmPassword, setConfirmPassword] = useState("")
    const history = useHistory();

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
            if(data.errors){
                setErrors(data.errors)
            }else {
                setCurrentUser(data)
                history.push('/') 
            }
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={(e) => handleCreateAccount(e)}>
                <label htmlfor="username">
                    Username: 
                </label>
                <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                
                <label htmlfor="password">
                Password: 
                </label>
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                
                <label htmlfor="confirm-password">
                    Confirm Password: 
                </label>
                <input type="password" name="confirm-password" id="confirm-password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>

                <input type="submit" value="Sign Up">
                </input>
            </form>
        </div>

    )
}
