import React, { useState, useEffect } from 'react'
import Story from '../Components/Story'

const StoryContainer = () => {
    const [story, setStory] = useState([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => newStory(), [])

    const newStory = () => {
        fetch("http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25") 
        .then(res => res.json())
        .then(res => setStory(res))
        .catch(err => setHasError(true), [])
    }

    return (
        <div>
            <Story storyText={story} />
            <button onClick={newStory}> NEW STORY </button>
        </div>
    )
}

{/*powered by MadlibzAPI: https://madlibz.herokuapp.com/api#api*/}

export default StoryContainer;