import React, {Component} from 'react';

class Animal extends Component {

    constructor(props) {
        super(props);
        let {myAnimal} = this.props;
        this.state = {myAnimal}
    }

    canFlight = () => {
        let {myAnimal} = this.state;
        console.log(this.state)
        myAnimal.canFlight = !myAnimal.canFlight;
        this.setState({myAnimal});
    }
    render() {
        let {myAnimal} = this.props;
        return (
            <div>
                type - {myAnimal.type} - Year - {myAnimal.year} - High - {myAnimal.high} - Can Flight - {myAnimal.canFlight.toString()}
                <button onClick={this.canFlight}>Can Flight?</button>
            </div>
        );
    }

}

export default Animal;
