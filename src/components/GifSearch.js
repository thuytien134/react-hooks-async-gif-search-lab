import React from "react";
import {useState} from 'react'
function GifSearch({onSubmitSearch}) {
    const [inputValue,setInputValue]=useState('')
    function handleChange(e){
        setInputValue(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        onSubmitSearch(inputValue)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter a Search Term: </label>
                <input value={inputValue} type="text" onChange={handleChange}/>
                <button type="submit">Find Gifs</button>
            </form>
        </>
    )
}
export default GifSearch