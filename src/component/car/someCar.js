import React, {Component} from 'react';

class SomeCar extends Component {
    constructor(props) {
        super(props);
        let {gotCar} = this.props;
        this.state = {gotCar};
    }
    addYear = () => {
        let {gotCar} = this.state;
        gotCar.year = gotCar.year +1;
        this.setState({gotCar});
    }
    decreaseYear = () => {
        let {gotCar} = this.state;
        gotCar.year = gotCar.year -1;
        if (gotCar.year > 2000) {
            console.log(">2000")
        }
        this.setState({gotCar});
    }
    render() {
        let {gotCar} = this.props;
        return (
            <div>
                {gotCar.name} - {gotCar.year} - {gotCar.engine}
                <button onClick={this.addYear}>+</button>
                <button onClick={this.decreaseYear}>-</button>
            </div>
        );
    }
}

export default SomeCar;
