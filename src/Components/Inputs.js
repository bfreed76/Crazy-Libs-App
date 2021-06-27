import React from 'react'


const Inputs = (props) => {             //? RENDERS USER INPUT FORM

    return (
    <form onChange={props.inputToState}>
        <input type="text" name={props.id} placeholder={props.blank}/>
    </form>
    )
}

export default Inputs