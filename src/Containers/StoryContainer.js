import React, { useState, useEffect } from 'react'

const StoryContainer = () => {
    const [story, setStory] = useState([]);
    const [hasError, setHasError] = useState(false)

    useEffect(() => newStory(), [])

    const newStory = () => {
        fetch("http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25") 
        .then(res => res.json())
        .then(res => setStory(res))
        .catch(err => setHasError(true), [])
    }

    const displayStory = () => {
        console.log("DISPLAYSTORY")
        let blanksCounter = 0
        story.value.map((line) => {
            <div>
            <p>{line}</p>
            {/* <p>{story.blanks.blanksCounter}</p> */}
            </div>
        })
    }

    return (
        <div>
            <h1>Crazy Libs!</h1>
            <p>Fill in the blanks then push the save button below to share your story with others!</p>
            <hr></hr>

            {displayStory()}

            <h3>{story.title}</h3>
            {/* <p>{story.value}</p> */}
            <button onClick={newStory}> NEW STORY </button>
            {/* {if hasError ? <div>Error Occured</div> : console.log("fetch worked!") } */}
        </div>
    )
}

{/*powered by MadlibzAPI: https://madlibz.herokuapp.com/api#api*/}

export default StoryContainer;