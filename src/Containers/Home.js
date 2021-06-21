import React from 'react'
import froggy from '../froggy.jpg';


export const Home = () => {

    return (
        <div>
        <header className="App-header">
        <h1 className="Top-header">Crazy Libs App</h1>
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
        </div>
    )
}

export default Home;