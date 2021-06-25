import React from 'react'

const Header = (props) => {

    return(
        <div>
            <h1>Loco Libs</h1>
            <p>Fill in the blanks then click the finished button below to share your story with others!</p>
            <hr></hr>
            <button onClick={props.newStoryClick}> NEW STORY </button> <button onClick={props.viewStories}>VIEW STORIES</button> 
            <h3>{props.title}</h3>
        </div>
    )
}

export default Header 