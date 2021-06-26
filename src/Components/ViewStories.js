import React, { useState, useEffect } from 'react'

const ViewStories = () => {    
    const [storyList, setStoryList] = useState(["empty"])
    const [hasError, setHasError] = useState(false)
    useEffect(() => getStories(), [])

    const getStories = () => {                      //? FETCHES AND MAPS SAVED STORIES
        fetch("http://localhost:9393/stories") 
        .then(res => res.json())
        .then(res =>setStoryList(res))
        .catch(err => setHasError(true), [])}

    const deleteLast = () => {
        fetch("http://localhost:9393/stories", {method: 'DELETE'})
        .then(res => res.json())
        .then(res => console.log(res))
        window.location.reload()
    }

    return(
        <div>
            <h1>All Stories</h1>
            <button onClick={() => window.location.assign("http://localhost:3000/your_story")}>BACK</button>
            <button onClick={deleteLast}>DELETE LAST</button>
            {storyList.map((story) => {
                return (<div> <h3> {story.id } {story.title} by {story.author}</h3> 
                    <p>{story.content}</p> </div>)
                    }
                )}
            <br></br>
        </div>
    )
}

export default ViewStories