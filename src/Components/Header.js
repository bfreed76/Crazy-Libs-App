import React from 'react'

const Header = (props) => {


    return(
        <div>
            <h1>Loco Libs</h1>
                <p>Fill in the blanks then click the finished button to share your Loco Lib with others!</p>
            <hr></hr>
                <button onClick={props.newStoryClick}> NEW </button> 
                <button onClick={() => window.location.assign("http://localhost:3000/stories")}>VIEW STORIES</button> 
            <h3>{props.title}</h3>
        </div>
    )
}

export default Header 