import React, { useEffect } from "react";
import { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
export default function GifListContainer() {
    const [gify, setGify] = useState([])
    const [search, setSearch] = useState("")
    let first3Gify = gify.slice(0, 3)
    let newData = first3Gify.map(gif => {
        return { url: gif.images.original.url }
    })

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=3HGaXUwWzidJlMT8EMUDeTYqByUqw1Op`)
            .then(r => r.json())
            .then(imagescol => setGify(imagescol.data))
    }, [search])
    function handleSubmit(userInput) {
        setSearch(userInput)
    }
    return (
        <>
            <GifSearch onSubmitSearch={handleSubmit} />
            <GifList gify={newData} />
        </>
    )
}