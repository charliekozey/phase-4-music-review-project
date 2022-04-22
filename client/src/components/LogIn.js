import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LogIn({ setCurrentUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors]= useState()
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
            <h2>Log In</h2>
            {errors && errors.map(e => <h4 style={{color: "red"}}>{e}</h4>)}
            <form onSubmit={(e) => handleLogIn(e)}>
                <label htmlFor='username'>
                    Username: 
                </label>
                <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                
                <label htmlFor='password'>
                    Password: 
                </label>
                
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <input type="submit" value="Log In">
                </input>
            </form>
        </div>

    )
}
