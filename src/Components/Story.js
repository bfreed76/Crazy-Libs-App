import React from 'react';


const Story = (props) => {              //? RENDERS ZIPPED STORY TO USER AND USERNAME FORM

    return(
        <div>
            <p>{props.finishedStory}</p>
            <br></br>
            <form onChange={props.usernameToState}>
                <input type="text" placeholder="Enter First Name"/> 
                <br></br><br></br>
                <button onClick={props.saveStory}>SAVE STORY</button>
            </form>
        </div>
    )
}

export default Story