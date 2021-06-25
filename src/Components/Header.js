import React from 'react'
import ViewStories from './ViewStories'

const Header = (props) => {

    return(
        <div>
            <h1>Loco Libs</h1>
            <p>Fill in the blanks then click the finished button below to share your story with others!</p>
            <hr></hr>

            <button onClick={props.newStoryClick}> NEW </button> 
            <button onClick={props.getStories}>VIEW STORIES</button> 
            <h3>{props.title}</h3>
        </div>
    )
}

export default Header 