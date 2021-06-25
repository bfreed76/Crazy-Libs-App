import React from 'react';

const ViewStories = (props) => {    

    return(
        <div>
            <h1>VIEWSTORIES COMPONENT</h1>
            {props.storyList ? props.storyList.map((story) => {
                return (<div> <h3> {story.id } {story.title} </h3> 
                    <p>{story.content}</p> </div>)
                    }
                ) : null
            }
            <br></br>
        </div>
    )
}

export default ViewStories