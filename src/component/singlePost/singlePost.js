import React, {Component} from 'react';

class SinglePost extends Component {
    render() {
        let post = this.props.somePost
        return (
            <div className='singlePost'>
                {post.body}
            </div>
        );
    }
}

export default SinglePost;
