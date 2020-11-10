import React from "react";

export default function OneUser(props) {

    let {id, name, username, email} = props.user;
    // console.log(props)
    let getData = props.getUserByID;
    let getUserPost = props.currentPost;
    return (
        <div>
            <div>
                <button onClick={() => (getData(id))}>User Info</button>
                <button onClick={() => (getUserPost(id))}>Post</button>
                {id} - {name} - {username} - {email}
            </div>
            <hr/>
        </div>
    )
}
