import React, {Component} from 'react';
import {users} from "../../data/data";
import Oneuser from "../user/oneuser";

class Users extends Component {
    render() {
        return (
            <div className='mytarget'>
                {
                    users.map((user, index) => {
                        return (<Oneuser userToSent={user} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default Users;
