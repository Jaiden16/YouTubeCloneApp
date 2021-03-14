import React from "react"
import { Link } from "react-router-dom"

function ThumbNail(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.desc}</p>
            <Link to={`/video/${props.videoId}`}>
                <img src={props.url} alt="broken link" />
            </Link>
        </div>
    )
}


export default ThumbNail