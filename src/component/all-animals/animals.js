import React, {Component} from 'react';
import {animals} from "../../data/animals";
import Animal from "../animal/animal";

class Animals extends Component {
    render() {
        return (
            <div>
                {
                    animals.map((animal, index) => {
                        return (<Animal myAnimal={animal} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default Animals;
