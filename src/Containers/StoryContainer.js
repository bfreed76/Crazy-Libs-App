import React, { useState, useEffect } from 'react'
import Inputs from '../Components/Inputs'
import Story from '../Components/Story'
import ViewStories from '../Components/ViewStories'

const StoryContainer = (props) => {
    const [finished, setFinished] = useState(false)
    const [user, setUser] = useState()
    const [input, setInput] = useState({})
    const [story, setStory] = useState("")
    const {title, blanks, value} = props.storyText


    const inputToState = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInput(prevState => {return {...prevState, [name]: value}})  
    }

    const displayBlanks = () => {
        if(blanks) {
            return blanks.map((blank, id) => {
                return <Inputs blank={blank} key={id} inputToState={inputToState} id={id}/>
                }
            )
        } 
    }

    const zipStory = () => {
        setFinished(true)
        let counter = 0
        value.pop()
        let mapping = value.map((line) => {
            let concat
            concat = input[counter] ? concat = line + input[counter] : line
            counter += 1
            return concat
        })
        let finishedStory = mapping.join("")
        setStory(finishedStory)
    }
    
    const newStoryClick = () => {
        setFinished(false)
        return props.newStory()
    }
    
    const usernameToState = (e) => {
        e.preventDefault()
        const {value} = e.target
        setUser(prev => {return {...prev, value}}) 
    }

    const saveStory = (e) => {      //? POSTS USERNAME AND STORY
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: title,
                content: story
            })};
        fetch("http://localhost:9393/users", requestOptions)
            .then(res => res.json())
            .then(data => console.log(data))

        const requestOptionsB = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: user,
            })};
        fetch("http://localhost:9393/stories", requestOptionsB)
            .then(res => res.json())
            .then(data => console.log(data))

    }

    const viewStories = () => {
        console.log("viewstories working")
        return <ViewStories stories={props.stories} />
    }
    

    return (
        <div>
            <h1>Loco Libs</h1>
            <p>Fill in the blanks then click the finished button below to share your story with others!</p>
            <hr></hr>
            <button onClick={newStoryClick}> NEW STORY </button> <button onClick={viewStories}>VIEW STORIES</button> 
            <h3>{title}</h3>
            {!finished ? [displayBlanks(), <br></br>, <button onClick={zipStory}>FINISHED</button>] : <Story finishedStory={story} usernameToState={usernameToState} saveStory={saveStory}/>}
            <br></br>
        </div>
    )
}

export default StoryContainer