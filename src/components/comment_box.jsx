import React from "react"

function Comment(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.comment}</p>
        </div>
    )
}

export default Comment 