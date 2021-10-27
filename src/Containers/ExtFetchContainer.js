import React, { useState, useEffect } from "react";
import StoryContainer from "./StoryContainer";

const ExtFetchContainer = (props) => {
  const [story, setStory] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => newStory(), []);

  const newStory = () => {
    //? FETCHES NEW STORY AND BLANKS FROM API
    fetch("https://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25")
      .then((res) => res.json())
      .then((res) => setStory(res))
      .catch((err) => setHasError(true), []);
  };

  return (
    <div>
      <StoryContainer storyText={story} newStory={newStory} />
      {hasError && <p>Oops, our bad. Something went froggy. Try again later.</p>}
    </div>
  );
};

export default ExtFetchContainer;
