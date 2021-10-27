import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ViewStories = (props) => {
  const [storyList, setStoryList] = useState(["empty"]);
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const baseURL = "https://loco-libs-rails-backend.herokuapp.com/"; // Production API
  // const baseURL = "http://localhost:9393/" // SQLite3 Development API
  // const baseURL = "http://localhost:3000/"; // PSQL Development API

  useEffect(() => getStories(), []);

  const getStories = () => {
    //? FETCHES AND MAPS SAVED STORIES
    fetch(baseURL + "stories")
      .then((res) => res.json())
      .then((res) => setStoryList(res))
      .catch((err) => setHasError(true), []);
  };

  const deleteStory = (storyID) => {
    //? DELETES STORY AND RELOADS PAGE
    console.log(baseURL + "stories/" + storyID);
    fetch(baseURL + "stories/" + storyID, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => console.log(res));
    // setTimeout(() => {
    //   window.location.reload();
    // }, 350);
  };

  const renderStories = () => {
    //? RENDERS SAVED STORIES
    if (storyList) {
      return storyList.map((story) => {
        return (
          <div>
            {" "}
            <h3>
              {" "}
              Story {story.id}. {story.title}
            </h3>{" "}
            <p>by {story.author}</p>
            <p>{story.content}</p> <button onClick={() => deleteStory(story.id)}>Delete</button>
          </div>
        );
      });
    } else {
      console.log(storyList);
    }
  };

  return (
    <div>
      <h1>All Stories</h1>
      <button onClick={() => history.push("/your_story")}>NEW STORY</button>
      {renderStories()}
      <br></br>
      {hasError && <p>Oops, our bad. Something went froggy.</p>}
    </div>
  );
};

export default ViewStories;
