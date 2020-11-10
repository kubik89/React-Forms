import React, {Component} from 'react';

class Phone extends Component {
    constructor(props) {
        super(props);
        let {sentPhone} = this.props;
        this.state = {sentPhone}
    }
    render() {
        let {sentPhone} = this.props;
        return (
            <div>
                {sentPhone.vendor} - {sentPhone.model} - {sentPhone.price}
                <button onClick={this.changePrice}>Change Price</button>
                <button onClick={this.resetPrice}>Reset</button>
            </div>
        );
    }
    changePrice = () => {
        let {sentPhone} = this.state;
        sentPhone.price = sentPhone.price + 10;
        this.setState({sentPhone});
    }
    defPrice = 1000;

    resetPrice = () => {
        let {sentPhone} = this.state;
        sentPhone.price = sentPhone.defaultPrice;
        this.setState({sentPhone})
    }
}

export default Phone;
