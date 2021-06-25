import React from 'react';

const Story = (props) => {

    return(
        <div>
            <p>{props.finishedStory}</p>
            <form onChange={props.usernameToState}>
                <input type="text" placeholder="Enter First Name"/> 
                <br></br><br></br>
                <button onClick={props.saveStory}>SAVE STORY</button>
            </form>
        </div>
    )

}

export default Story