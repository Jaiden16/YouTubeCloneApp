import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import HomePage from "./components/homepage"
import Video from "./components/video"
import About from "./components/about"
import './App.css';

function App() {
  return (
    <div className="App">
      <nav id="header">
        <p>YouTube</p>{" "}
        <Link to="/">Home</Link>{" "}
        <Link to ="/video">Video</Link>{" "}
        <Link to="/about">About</Link>
      </nav>

      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/video/:videoId"  component = {Video}/>
        <Route path = "/about" component = {About}/>
      </Switch>
      



    </div>
  );
}

export default App;






