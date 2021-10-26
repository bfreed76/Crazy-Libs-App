import React, { useState } from "react";
import Inputs from "../Components/Inputs";
import Story from "../Components/Story";
import Header from "../Components/Header";

const StoryContainer = (props) => {
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState(false);
  const [user, setUser] = useState("");
  const [userID, setUserID] = useState();
  const [input, setInput] = useState({});
  const [story, setStory] = useState("");
  const [hasError, setHasError] = useState(false);
  const { title, blanks, value } = props.storyText;
  // const baseURL = "https://loco-libs-rails-backend.herokuapp.com/"  // Production API
  // const baseURL = "http://localhost:9393/" // SQLite3 Development API
  const baseURL = "http://localhost:3000/"; // PSQL Development API

  const inputToState = (e) => {
    //? SETS USER INPUTS (VOCAB WORDS) TO STATE
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const displayBlanks = () => {
    //? DISPLAYS USER INPUT FORMS
    if (blanks) {
      return blanks.map((blank, id) => {
        return <Inputs id={id} blank={blank} key={id} inputToState={inputToState} />;
      });
    }
  };

  const zipStory = () => {
    //? ZIPS UP USER INPUT AND STORIES, SETS TO STATE
    setFinished(true);
    let counter = 0;
    value.pop();
    let storyZipper = value.map((line) => {
      let concat;
      concat = input[counter] ? (concat = line + input[counter]) : line;
      counter += 1;
      return concat;
    });
    let finishedStory = storyZipper.join("");
    setStory(finishedStory);
  };

  const newStoryClick = () => {
    //? CALLBACK TO FETCH NEW STORY AND BLANKS
    setFinished(false);
    setSaved(false);
    return props.newStory();
  };

  const usernameToState = (e) => {
    //? SETS USERNAME TO STATE
    e.preventDefault();
    let userName = e.target.value;
    setUser((prev) => {
      return { ...prev, userName };
    });
  };

  const saveStory = (e) => {
    //? POSTS USERNAME AND ZIPPED STORY
    e.preventDefault();
    // const requestOptionsUser = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({}),
    // };
    const requestOptionsStory = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        author: user.userName,
        content: story,
        user_id: userID,
      }),
    };
    // fetch(baseURL + "users", requestOptionsUser)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUserID(data.id);
    //     console.log(data);
    //   })
    //   .catch((err) => setHasError(true), [])
    //   .then(
        fetch("http://localhost:3000/stories", requestOptionsStory)
          .then((res) => res.json())
          .then((data) => console.log(data))
    //   )
      .catch((err) => setHasError(true), []);
    setSaved(true);
  };

  return (
    <div>
      <Header newStoryClick={newStoryClick} title={title} />
      {!finished ? (
        [displayBlanks(), <br></br>, <button onClick={zipStory}>FINISHED</button>]
      ) : (
        <Story finishedStory={story} usernameToState={usernameToState} saveStory={saveStory} />
      )}
      {saved ? <h2>STORY SAVED</h2> : null}
      {hasError && <p>Oops, our bad. Something went froggy. Try again later.</p>}
    </div>
  );
};

export default StoryContainer;
