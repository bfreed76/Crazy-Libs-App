import React, { useState, useEffect } from 'react'
import Inputs from '../Components/Inputs'
import Story from '../Components/Story'
import Header from '../Components/Header'
import ViewStories from '../Components/ViewStories'

const StoryContainer = (props) => {
    const [finished, setFinished] = useState(false)
    const [user, setUser] = useState("")
    const [input, setInput] = useState({})
    const [story, setStory] = useState("")
    const {title, blanks, value} = props.storyText


    const inputToState = (e) => {               //? SETS USER INPUT TO STATE
        e.preventDefault()
        const {name, value} = e.target
        setInput(prevState => {return {...prevState, [name]: value}})  
    }

    const displayBlanks = () => {               //? DISPLAYS USER INPUTS
        if(blanks) {
            return blanks.map((blank, id) => {
                return <Inputs blank={blank} key={id} inputToState={inputToState} id={id}/>
                }
            )
        } 
    }

    const zipStory = () => {                    //? ZIPS USER INPUT AND STORIES
        setFinished(true)
        let counter = 0
        value.pop()
        let mapping = value.map((line) => {
            let concat
            concat = input[counter] ? concat = line + input[counter] : line
            counter += 1
            return concat
        })
        let finishedStory = mapping.join("")
        setStory(finishedStory)
    }
    
    const newStoryClick = () => {                 //? FETCHES NEW STORY
        setFinished(false)
        return props.newStory()
    }
    
    const usernameToState = (e) => {               //? SETS USERNAME TO STATE
        e.preventDefault()
        let userName = e.target.value
        setUser(prev => {return {...prev, userName}}) 
    }

    const saveStory = (e) => {                      //? POSTS USERNAME AND ZIPPED STORY
        e.preventDefault()
        const requestOptionsStory = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: title,
                content: story
            })};
        const requestOptionsUser = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: user.value,  //pass in string of marge
            })};
        fetch("http://localhost:9393/users", requestOptionsUser)
            .then(res => res.json())
            .then(data => console.log(data))

        fetch("http://localhost:9393/stories", requestOptionsStory)
            .then(res => res.json())
            .then(data => console.log(data))

    }

    const viewStories = () => {                     //? DISPLAYS ALL STORIES (ignore me!!)
        let testArr = ["Yesterday, my friend and I went to the park. On our way to the park, we saw big balloons tied to a . Once we got to the park, the sky turned . It started to and . My friend and I all the way home. Tomorrow we will try to go to the park again and hopefully it doesnt !", 
        "History is because we learn about and that happened long ago. I can't believe people used to dress in clothing and kids played with and instead of video games. Also, before cars were invented, people actually rode ! People read instead of computers and tablets, and sent messages via that took days to arrive. I wonder how kids will view my life in year(s); maybe they will ride flying cars to school and play with and !",
    "A in was arrested this morning after he was caught in front of . had a history of , but no one-not even his -ever imagined he'd with a stuck in his . After drinking a , cops followed him to a where he reportedly in the fry machine. Later, a woman from was charged with a similar crime. But rather than with a , she with a dog. Either way, we imagine that after witnessing him with a there are probably a whole lot of that are going to need some therapy!"]
        return testArr.map((storyUser, id) => {
            // return <ViewStories story={storyUser} key={id} />
            console.log(id, storyUser)
            }
        )
    }
    

    return (
        <div>
            <Header newStoryClick={newStoryClick}  viewStories={viewStories} title={title}/>
            {!finished ? 
                [displayBlanks(), <br></br>, <button onClick={zipStory}>FINISHED</button>] :
                <Story finishedStory={story} usernameToState={usernameToState} saveStory={saveStory}/>}
        </div>
    )
}

export default StoryContainer