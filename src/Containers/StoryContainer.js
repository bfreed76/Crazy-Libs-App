import React, { useState, useEffect } from 'react'

const StoryContainer = () => {
    const [story, setStory] = useState("Story1");

    useEffect(() => {
        <p>"UseEffect is effective!</p>
    })

    return (
        <div>
            <p>"Story Container, muthafucka!"</p>
        </div>
    )
}

export default StoryContainer;