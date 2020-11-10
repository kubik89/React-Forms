import React, {Component} from 'react';
import {cars} from "../../data/cars";
import SomeCar from "../car/someCar";

class CarList extends Component {
    render() {
        return (
            <div>
                {
                    cars.map((car, index) => {
                        return (<SomeCar gotCar={car} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default CarList;
