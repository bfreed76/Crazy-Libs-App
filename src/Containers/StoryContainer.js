import React, { useState, useEffect } from 'react'

function StoryContainer() {
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