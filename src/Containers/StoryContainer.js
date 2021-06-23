import React, { useState, useEffect } from 'react'
import Inputs from '../Components/Inputs'
import Story from '../Components/Story'

const StoryContainer = (props) => {
    const [finished, setFinished] = useState(false)
    const [user, setUser] = useState("")
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

    const saveStory = (e) => {
        console.log("SAVE STORY")
        // setUser(e)
        debugger
    }


    return (
        <div>
            <h1>Loco Libs</h1>
            <p>Fill in the blanks then click the finished button below to share your story with others!</p>
            <hr></hr>
            <button onClick={newStoryClick}> NEW STORY </button>
            <h3>{title}</h3>
            {!finished ? [displayBlanks(), <br></br>, <button onClick={zipStory}>FINISHED</button>] : 
                [<Story finishedStory={story}/>, 
                <input type="text" placeholder="Your Name"></input>, 
                <button onClick={saveStory}>SAVE STORY</button>]}
            <br></br>
        </div>
    )
}

export default StoryContainer