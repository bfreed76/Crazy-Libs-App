import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { useState } from 'react'
import ViewStories from './Components/ViewStories'
import FetchContainer from './Containers/FetchContainer'
import Home from './Containers/Home'
import './App.css'


function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/your_story' render={(routeProps) => <FetchContainer {...routeProps} />} />
        <Route exact path='/stories' render={(routeProps) => <ViewStories {...routeProps} />} /> 
      </Switch>
    </div>
      </Router>
  );
}

export default App;
