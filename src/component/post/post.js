import React from "react";

export function Post (props) {
    let {userId, id, title, body} = props.everyPost;
    let myPost = props.singlePost;
    return (
        <div>
            <button onClick={() => (myPost(id))}>Get Post</button>
            <input onChange={() => (myPost(id))}/>
            {userId} - {id} - {title} - {body}
        </div>
    )
}
