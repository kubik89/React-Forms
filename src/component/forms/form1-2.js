import React, {Component} from 'react';

class Form12 extends Component {
    constructor(props, context) {
        super(props, context);
        let {someUser} = this.props;
        this.state = {someUser}
    }
    // render() {
    //     let {name, email} = this.props.someUser
        // return (
            // <div>
            //     {this.props.someUser.name} - {this.props.someUser.email}
            // </div>
        // );
    // }
}

export default Form12;
