import React, { useState, useEffect } from 'react'

const Story = (props) => {
    const {title, blanks, value} = props.storyText
    const [input, setInput] = useState([]);
    let mapBlanks

    const onChange = ({e}) => {
        // debugger
        // setDisplay(e.value)
        // console.log(e.value)
        }
    
        if(blanks) {
            let counter = 0
            // let inputContainer = []
            mapBlanks = blanks.map(blank => {
                let blanksList = <div>
                                    <form>
                                    <input type="text" name={counter} onChange={e => onChange(e)} placeholder={blank}/>
                                    </form>
                                </div>
                counter += 1
                // debugger
                return blanksList

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
            {mapBlanks}
            <p>
               "This is what in state:" {input}
            </p>

        </div>
    )
}

export default Story