import React, {Component} from 'react';

class User1 extends Component {
    render() {
    let someUser = this.props.someUser;
        return (
            <div>
                {someUser.id} - {someUser.name}
            </div>
        );
    }
}

export default User1;
