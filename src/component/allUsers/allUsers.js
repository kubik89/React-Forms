import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import OneUser from "../oneUser/oneUser";
import User1 from "../User1/user1";
import {PostService} from "../../services/postService";
import MyPost from "./myPost";
import UserForformzDz from "./userForformzDz";
import Form1 from "../forms/form1";

class AllUsers extends Component {
    _userService = new UserService();
    _postService = new PostService()
    state = {
        users: [],
        someUser: [],
        allPosts: [],
        singlePost1: [],
        postsMapped: []
    };

    // async componentDidMount() {
    //     let users = await this._userService.getAllUsers().then(value => {
    //         this.setState({users})
    //         }
    //     )
    // }

    componentDidMount() {
        this._userService.getAllUsers().then(value => {
            this.setState({users: value})
        })
        this._postService.getAllPosts().then(value => {
            this.setState({allPosts: value})
        })
    }

    singlePost = (id) => {
        console.log('222')
        let filter = this.state.allPosts.filter(value => value.id === id);
        this.setState({singlePost1: filter[0]})
        console.log(filter[0])
    }

    getSomeUserById = (id) => {
        let userFilter = this.state.users.filter(value => value.id === id);
        this.setState({someUser: userFilter[0]})
    }

    getSomeUserByIdforForm = (id) => {
        let userFilter = this.state.users.filter(value => value.id === id);
        this.setState({someUser: userFilter[0]})
    }

    render() {
        let {someUser} = this.state;
        let {allPosts} = this.state;
        let {users} = this.state;
        let {singlePost1} = this.state;
        return (
            <div>
                {
                    users.map(value => (<OneUser
                        user={value}
                        key={value.id}
                        getUserByID={this.getSomeUserById}
                        currentPost={this.singlePost}
                    />)
                    )
                }
                {
                    (<User1 someUser={someUser}/>)
                }
                {
                    (<MyPost singlePost={singlePost1}/>)
                }
                {/*{*/}
                {/*    (<UserForformzDz getUserByID1={this.getSomeUserById}/>)*/}
                {/*}*/}
                {/*{*/}
                {/*    (<UserForformzDz*/}
                {/*        getUserByID2={this.getSomeUserByIdforForm}*/}
                {/*        someUser={someUser}*/}
                {/*    />)*/}
                {/*}*/}
                {
                    <Form1 getUserByID3={this.getSomeUserByIdforForm}/>
                }
                {/*{*/}
                {/*    (<AllUsers someUser={someUser}/>)*/}
                {/*}*/}
                {/*{*/}
                {/*    allPosts.map(value => (<MyPost singlePost={value} key={value.id}/>*/}
                {/*    ))*/}
                {/*}*/}
                {/*{*/}
                {/*    // (<OneUser currentPost={this.singlePost}/>)*/}
                {/*}*/}
            </div>
        );
    }
}

export default AllUsers;
