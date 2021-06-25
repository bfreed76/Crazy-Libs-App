import React from 'react';

const ViewStories = (props) => {    

return(
        <div>
            <h1>VIEWSTORIES COMPONENT</h1>
            <p>{props.id}{props.story}</p>                        
            <br></br>
        </div>
    )
}

export default ViewStories