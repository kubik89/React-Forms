import React, {Component} from 'react';

class UserForformzDz extends Component {

    constructor(props, context) {
        super(props, context);
        // console.log(props)
    }

    render() {
        let data11 = this.props.data11
        let someUser = this.props.someUser
        let gotUserByID = this.props.getUserByID1
        return (
            <div>
                {/*{data11}*/}
                {/*{someUser.id}*/}
            </div>
        );
    }
}

export default UserForformzDz;
