import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ViewStories from './Components/ViewStories'
import ExtFetchContainer from './Containers/ExtFetchContainer'
import Home from './Components/Home'
import './App.css'


function App() {        //? ROUTES TO LANDING PAGE, STORY GENERATOR AND VIEW STORIES PAGES

  return (
    <Router>          
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/your_story' render={(routeProps) => <ExtFetchContainer {...routeProps} />} />
          <Route exact path='/stories' render={(routeProps) => <ViewStories {...routeProps} />} /> 
        </Switch>
      </div>
    </Router>
  )
}

export default App;
