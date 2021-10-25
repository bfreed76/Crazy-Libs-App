import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  // const baseURL = "https://loco-libs-rails-backend.herokuapp.com/"  // Production API
  // const baseURL = "http://localhost:9393/" // SQLite3 Development API
  const baseURL = "http://localhost:3000/"; // PSQL Development API

  return (
    <div>
      <h1>Loco Libs</h1>
      <p>Fill in the blanks then click the finished button to share your Loco Lib with others!</p>
      <hr></hr>
      <button onClick={props.newStoryClick}> NEW STORY</button>
      <button onClick={() => 
        // window.location.assign("http://localhost:3000/stories")
        history.push("/stories")
        }>
        VIEW STORIES
      </button>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Header;
