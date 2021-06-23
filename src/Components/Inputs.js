import React, { useState, useEffect } from 'react'

const Inputs = (props) => {

    return (
    <form onChange={props.inputToState}>
        <input type="text" name={props.id} placeholder={props.blank}/>
    </form>
    )

}

export default Inputs