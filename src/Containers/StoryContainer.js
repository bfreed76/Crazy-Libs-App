import React, { useState, useEffect } from 'react'
import Inputs from '../Components/Inputs'
import Story from '../Components/Story'
import Header from '../Components/Header'
import ViewStories from '../Components/ViewStories'

const StoryContainer = (props) => {
    const [finished, setFinished] = useState(false)
    const [user, setUser] = useState("")
    const [input, setInput] = useState({})
    const [story, setStory] = useState("")
    const {title, blanks, value} = props.storyText


    const inputToState = (e) => {               //? SETS USER INPUT TO STATE
        e.preventDefault()
        const {name, value} = e.target
        setInput(prevState => {return {...prevState, [name]: value}})  
    }

    const displayBlanks = () => {               //? DISPLAYS USER INPUTS
        if(blanks) {
            return blanks.map((blank, id) => {
                return <Inputs blank={blank} key={id} inputToState={inputToState} id={id}/>
                }
            )
        } 
    }

    const zipStory = () => {                    //? ZIPS USER INPUT AND STORIES
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
    
    const newStoryClick = () => {                 //? FETCHES NEW STORY
        setFinished(false)
        return props.newStory()
    }
    
    const usernameToState = (e) => {               //? SETS USERNAME TO STATE
        e.preventDefault()
        let userName = e.target.value
        setUser(prev => {return {...prev, userName}}) 
    }

    const saveStory = (e) => {                      //? POSTS USERNAME AND ZIPPED STORY
        e.preventDefault()
        const requestOptionsStory = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: title,
                content: story
            })};
        const requestOptionsUser = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: user.userName,  
            })};
        fetch("http://localhost:9393/users", requestOptionsUser)
            .then(res => res.json())
            .then(data => console.log(data))

        fetch("http://localhost:9393/stories", requestOptionsStory)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <Header newStoryClick={newStoryClick}  getStories={props.getStories} title={title}/>

            {!finished ?                
                [displayBlanks(), <br></br>, <button onClick={zipStory}>FINISHED</button>] :
                <Story finishedStory={story} usernameToState={usernameToState} saveStory={saveStory}/>}
        </div>
    )
}

export default StoryContainer