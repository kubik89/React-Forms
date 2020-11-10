import React, {Component} from 'react';
import {smatrphones} from "../../data/phones";
import Phone from "../phone/phone";

class AllPhones extends Component {
    render() {
        return (
            <div>
                {
                    smatrphones.map((phone, index) => {
                        return (<Phone sentPhone={phone} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default AllPhones;
