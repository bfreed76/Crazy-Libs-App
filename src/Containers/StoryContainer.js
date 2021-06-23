import React, { useState, useEffect } from 'react'
import Inputs from '../Components/Inputs'
import Story from '../Components/Story'

const StoryContainer = (props) => {
    const {title, blanks, value} = props.storyText
    const [finished, setFinished] = useState(false);
    const [input, setInput] = useState({});


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

    const renderStory = () => {
        setFinished(true)
        let counter = 0
         let mapping = value.map((line) => {
             return line + input[counter]
             counter += 1
         })
        // let finishedStory = mapping.join(" ")
        console.log("Render Story Finished")
        return <Story finishedStory={mapping} />
        
    }

    const newStoryClick = () => {
        setFinished(false)
        return props.newStory()
    }


    return (
        <div>
            <h1>Loco Libs</h1>
            <p>Fill in the blanks then click the finished button below to share your story with others!</p>
            <hr></hr>
            <button onClick={newStoryClick}> NEW STORY </button>
            <h3>{title}</h3>
            {!finished ? displayBlanks() : console.log("finished")}
            <br></br>
            <button onClick={renderStory}>FINISHED</button>
            <br></br>
        </div>
    )
}

export default StoryContainer