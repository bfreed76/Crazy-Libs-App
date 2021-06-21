import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './Containers/ScrollToTop'
import froggy from './froggy.jpg';
import './App.css';

function App() {
  return (
      <React.StrictMode> //? Detect additional issues
    <Router>
      <ScrollToTop /> //? Auto scroll on new page
      <Nav />
    <div className="App">
      <Switch>
        <Route exact path='/story' component={storyContainer} />

      <header className="App-header">
        <h1 className="Top-header">Mad Libs App</h1>
        <img src={froggy} alt="froggy" className="Top-image"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >

          Learn React
        </a>
      </header>
            </Switch>
    </div>
          </Router>
            </React.StrictMode>
  );
}

export default App;
