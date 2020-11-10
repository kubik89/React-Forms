import React, {Component} from 'react';

class AllUsers1 extends Component {
    constructor(props, context) {
        super(props, context);
    let name = props.user
    }
    render() {
        return (
            <div>
                <select>
                    <option value={this.props.name}>id</option>
                {/*{this.props.user.name} - {this.props.user.email}*/}

                </select>
            </div>
        );
    }
}

export default AllUsers1;
