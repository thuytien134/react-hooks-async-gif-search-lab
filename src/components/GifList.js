import React from "react";
export default function GifList({ gify }) {
    return (
        <ul>
            {gify.map((gif, index) => {
                return (
                    <li key={index}>
                        <img src={gif.url} alt='gif'/>
                    </li>
                )
            })}
        </ul>
    )
}