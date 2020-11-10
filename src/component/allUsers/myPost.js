import React, {Component} from 'react';

class MyPost extends Component {
    render() {
    let currentPost = this.props.singlePost
        return (
            <div>
                {currentPost.body}
            </div>
        );
    }
}

export default MyPost;
