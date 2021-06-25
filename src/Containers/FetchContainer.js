import React, { useState, useEffect } from 'react'
import StoryContainer from './StoryContainer'
import ViewStories from '../Components/ViewStories'

const FetchContainer = () => {
    const [story, setStory] = useState([])
    const [stories, setStories] = useState([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => newStory(), [])

    const newStory = () => {                        //? FETCHES NEW STORY FROM API
        fetch("http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25") 
        .then(res => res.json())
        .then(res => setStory(res))
        .catch(err => setHasError(true), [])
    }

    const getStories = () => {                      //? FETCHES AND MAPS SAVED STORIES
        fetch("http://localhost:9393/stories") 
        .then(res => res.json())
        .then(res => setStories(res))
        .catch(err => setHasError(true), []) 
        console.log("viewstories worked")
        return stories.map((story, id) => {
            return <ViewStories id={id} title={story.title} content={story.content} />
            }
        )
    }

    return (
        <div>
            <StoryContainer storyText={story} newStory={newStory} getStories={getStories} />
        </div>
    )
}

{/*powered by MadlibzAPI: https://madlibz.herokuapp.com/api#api*/}

export default FetchContainer;