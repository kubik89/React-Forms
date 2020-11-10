import React, {Component} from 'react';
import {trees} from "../../data/trees";
import Tree from "../tree/tree";

class Trees extends Component {
    render() {
        return (
            <div>
                {
                    trees.map((tree, index) => {
                        return (<Tree someTree={tree} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default Trees;
