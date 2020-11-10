import logo from './logo.svg';
import './App.css';
import {users} from "./data/data";
import Users from "./component/users-list/users";
import React from "react";
import CarList from "./component/cars/car-list";
import Animals from "./component/all-animals/animals";
import AllPhones from "./component/phones/all-phones";
import Trees from "./component/trees/trees";
import AllPosts from "./component/allPosts/allPosts";
import AllComments from "./component/allComments/allComments";
import Form1 from "./component/forms/form1";
import OneUser from "./component/oneUser/oneUser";
import User1 from "./component/User1/user1";
import AllUsers from "./component/allUsers/allUsers";
import UserForformzDz from "./component/allUsers/userForformzDz";


function App() {

    return (
        <div>
            {/*<AllComments/>*/}
            {/*<AllPosts/>*/}
            {/*<Users/>*/}
            {/*<hr/>*/}
            {/*<CarList/>*/}
            {/*<hr/>*/}
            {/*<Animals/>*/}
            {/*<hr/>*/}
            {/*<AllPhones/>*/}
            {/*<hr/>*/}
            {/*<Trees/>*/}
            <AllUsers/>
            <Form1/>
            {/*<OneUser/>*/}
            {/*<User1/>*/}
            {/*<UserForformzDz/>*/}
        </div>
    );
}

export default App;
