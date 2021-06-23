import React, { useState, useEffect } from 'react'
import Inputs from './Inputs'

const Story = (props) => {
    const {title, blanks, value} = props.storyText
    const [input, setInput] = useState([]);
    const [state, setState] = useState({});
    let displayBlanks //set to state

    const inputToState = (e) => {
        e.preventDefault()
        console.log(e.target.value, e.target.name)
    }

    if(blanks) { //change to function return blanks.map, const displayBlanks
        displayBlanks = blanks.map((blank, id) => {
        return <Inputs blank={blank} key={id} inputToState={inputToState} id={id}/>
            }
        )
    }

    
        
    return (
        <div>
            <h1>Crazy Libs</h1>
            <p>Fill in the blanks then push the save button below to share your story with others!</p>
            <hr></hr>
            <h3>{title}</h3>
            {/* <p>{value}</p> */}
            {/* <p>{blanks}</p> */}
            {displayBlanks}
            <p>
               "This is what in state:" {input}
            </p>

        </div>
    )
}

export default Story