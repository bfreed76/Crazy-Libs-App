import React, { useState, useEffect } from 'react'

const Story = (props) => {
    const {title, blanks, value} = props.storyText
    const [display, setDisplay] = useState([]);

    let mapStory
    let counter = 0
    if(value) {
        mapStory = value.map((line) => {
            // console.log(line, "mapping")
            let blanksWord = blanks[counter]
            let zipper =
            <div>
                <p>{line}
                <form>
                    <input type="text" placeholder={blanksWord} name={counter}/>
                </form>
                </p>
            </div>
            counter += 1
    
            // blanks ? setDisplay(display => [...display, zipper]) : console.log("blanks False")
            return zipper
        })
    }


    return (
        <div>
            <h1>Crazy Libs!</h1>
            <p>Fill in the blanks then push the save button below to share your story with others!</p>
            <hr></hr>
            <h3>{title}</h3>
            {mapStory}
            <p>
                {display}
                </p>

        </div>
    )
}

export default Story