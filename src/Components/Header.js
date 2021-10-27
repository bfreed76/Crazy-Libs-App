import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  return (
    <div>
      <h1>Loco Libs</h1>
      <p>Fill in the blanks then click the finished button to share your Loco Lib with others!</p>
      <hr></hr>
      <button onClick={props.newStoryClick}> NEW STORY</button>
      <button
        onClick={() =>
          history.push("/stories")
        }>
        VIEW STORIES
      </button>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Header;
