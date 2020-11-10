import React, {Component} from 'react';

class Oneuser extends Component {

    constructor(props) {
        super(props);
        let {userToSent} = this.props;
        this.state = {userToSent}

    }

    changeStatus = () => {
        let {userToSent} = this.state;
        userToSent.status = !userToSent.status;
        this.setState({userToSent})
    }

    render() {
        // console.log(this.props);
        let {userToSent} = this.props
        return (
            <div>
                {userToSent.name} - {userToSent.age} - {userToSent.status.toString()}
                <button onClick={this.changeStatus}>Ch.Status</button>
            </div>
        );
    }
}

export default Oneuser;
