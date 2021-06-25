import React from 'react';

const ViewStories = (props) => {

    return(
        <div>
            <h1>VIEWSTORIES COMPONENT</h1>
            {props.stories.map((story, id) => <p>{id, story}</p>)}                
            <br></br>
        </div>
    )
}

export default ViewStories