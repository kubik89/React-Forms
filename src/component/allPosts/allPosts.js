import React, {Component} from 'react';
import {PostService} from "../../services/postService";
import {Post} from "../post/post";
import SinglePost from "../singlePost/singlePost";
import OneUser from "../oneUser/oneUser";

class AllPosts extends Component {
    _postService = new PostService()
    state = {
        posts: [],
        somePost: []
    }

    componentDidMount() {
        this._postService.getAllPosts().then(value => {
            this.setState({posts: value})
        })
    }

    singlePost = (id) => {
        console.log('111')
        let filter = this.state.posts.filter(value => value.id === id);
        this.setState({somePost: filter[0]})
        console.log(filter[0])
    }

    render() {
        let {somePost} = this.state
        return (
            <div>
                {
                    this.state.posts.map(value => (<Post
                        everyPost={value}
                        key={value.id}
                        singlePost={this.singlePost}
                    />))
                }
                {
                    (<SinglePost somePost={somePost}/>)
                }
            </div>
        );
    }
}

export default AllPosts;
