import React, { useState, useEffect } from 'react'
import StoryContainer from './StoryContainer'
import ViewStories from '../Components/ViewStories'

const FetchContainer = (props) => {
    const [story, setStory] = useState([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => newStory(), [])

    const newStory = () => {                        //? FETCHES NEW STORY FROM API
        fetch("http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25") 
        .then(res => res.json())
        .then(res => setStory(res))
        .catch(err => setHasError(true), [])
    }

    return (
        <div>
            <StoryContainer storyText={story} newStory={newStory} />
        </div>
    )
}

{/*powered by MadlibzAPI: https://madlibz.herokuapp.com/api#api*/}

export default FetchContainer;