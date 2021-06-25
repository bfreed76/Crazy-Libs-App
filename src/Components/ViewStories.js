import React from 'react';

const ViewStories = (props) => {    

    const {id, title, content} = props.stories

    return(
        <div>
            <h1>VIEWSTORIES COMPONENT</h1>
            <p> {id} {title} {content} </p>
            <br></br>
        </div>
    )
}

export default ViewStories