

import './App.css';
import Home from './components/Home';
import AlbumDetail from './components/AlbumDetail';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import { Switch, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import ReviewForm from './components/ReviewForm';
import ReviewDetail from './components/ReviewDetail';

import { useEffect, useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState("")
 
  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      // console.log(res.json())
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])
  
  function onLogout() {
    setCurrentUser(null)
  }

  return (
    <div className="App">
      
      <Header currentUser={currentUser} onLogout={onLogout}/>
      
      <Switch>
        <Route exact path="/">
          <Home currentUser={currentUser}/>
        </Route>
        <Route exact path="/albums/:id">
          <AlbumDetail currentUser={currentUser} />
        </Route>
        <Route exact path="/albums/:id/reviews/new">
          <ReviewForm currentUser={currentUser} />
        </Route>
        <Route exact path="/albums/:id/reviews/:reviewID">
          <ReviewDetail currentUser={currentUser} />
        </Route>
        <Route exact path="/users/:id">
          <UserProfile currentUser={currentUser} />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <LogIn setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
