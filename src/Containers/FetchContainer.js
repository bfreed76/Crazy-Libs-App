import React, { useState, useEffect } from 'react'
import StoryContainer from './StoryContainer'

const FetchContainer = () => {
    const [story, setStory] = useState([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => newStory(), [])

    const newStory = () => {
        fetch("http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25") 
        .then(res => res.json())
        .then(res => setStory(res))
        .catch(err => setHasError(true), [])
    }

    const getStory = () => {
        fetch("http://localhost:9393/stories") 
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => setHasError(true), [])
    }

    return (
        <div>
            <StoryContainer storyText={story} newStory={newStory}/>
            {getStory()}
        </div>
    )
}

{/*powered by MadlibzAPI: https://madlibz.herokuapp.com/api#api*/}

export default FetchContainer;