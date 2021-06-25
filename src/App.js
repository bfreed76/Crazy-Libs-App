import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { useState } from 'react'
import ViewStories from './Components/ViewStories'
import FetchContainer from './Containers/FetchContainer'
import './App.css'
import Home from './Containers/Home'


function App() {
  const [storyList, setStoryList] = useState()
  
  const storyLister = (storydata) => {
    setStoryList = setStoryList({storydata})
  }

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/your_story' render={(routeProps) => <FetchContainer {...routeProps} storyLister={storyLister}/>} />
        <Route exact path='/stories' render={(routeProps) => <ViewStories {...routeProps} storyList={storyList}/>} /> //!sadfasd
      </Switch>
    </div>
      </Router>
  );
}

export default App;
