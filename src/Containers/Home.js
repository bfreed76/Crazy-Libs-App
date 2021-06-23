import React from 'react'
import froggy from '../froggy.jpg';


const Home = () => {

    const handleClick = () => {window.location.assign("http://localhost:3000/stories")} //? Simulate page nav

    return (
        <div>
        <header className="App-header">
        <h1 className="Top-header">Loco Libs App</h1>
        <img src={froggy} alt="froggy" className="Top-image"/>
        <br></br>
        <button onClick={handleClick}>BEGIN</button>
      </header>
        </div>
    )
}

export default Home;