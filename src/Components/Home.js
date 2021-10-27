import React from "react";
import froggy from "../froggy.jpg";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  //? RENDERS LANDING PAGE
  const history = useHistory();

  const handleClick = () => {
    history.push("/your_story");
  }; //? SIMULATES PAGE NAV

  return (
    <div>
      <header className='App-header'>
        <h1 className='Top-header'>Loco Libs App</h1>
        <img src={froggy} alt='froggy' className='Top-image' />
        <br></br>
        <button onClick={handleClick}>BEGIN</button>
        <Footer />
      </header>
    </div>
  );
};

export default Home;
