import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
// import ScrollToTop from './Containers/ScrollToTop';
import StoryContainer from './Containers/StoryContainer';
import froggy from './froggy.jpg';
import Home from './Containers/Home';
import './App.css';

      // <header className="App-header">
      //   <h1 className="Top-header">Mad Libs App</h1>
      //   <img src={froggy} alt="froggy" className="Top-image"/>
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //     >

      //     Learn React
      //   </a>
      // </header>

function App() {
  return (
    <React.StrictMode> 
    <Router>
      {/* <ScrollToTop /> //? Auto scroll on new page */}
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/story' component={StoryContainer} />
      </Switch>
    </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
