import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
// import ScrollToTop from './Containers/ScrollToTop';
import FetchContainer from './Containers/FetchContainer';
import './App.css';
import Home from './Containers/Home';

function App() {
  return (
    // <React.StrictMode> 
    <Router>
      {/* <ScrollToTop /> //? Auto scroll on new page */}
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/stories' render={(routeProps) => <FetchContainer {...routeProps}/>} />
      </Switch>
    </div>
      </Router>
    // </React.StrictMode>
  );
}

export default App;
