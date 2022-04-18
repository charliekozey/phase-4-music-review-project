

import './App.css';
import Home from './components/Home';
import AlbumDetail from './components/AlbumDetail';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/albums/:id">
          <AlbumDetail />
        </Route>
        <Route exact path="/users/:id">
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
