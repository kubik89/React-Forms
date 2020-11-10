import React, {Component} from 'react';
import UserForformzDz from "../allUsers/userForformzDz";

class Form1 extends Component {

    state = {
        data1: '111'
    }

    constructor(props) {
        super(props);
        this.gotUserByID = props.getUserByID3
        this.myInput = React.createRef();
        console.log(this.props)
    }

    render() {
        let {data1} = this.state;
        return (
            <div>
                {
                    <input ref={this.myInput} onChange={() => {
                        console.log(data1)
                        this.setState({data1: this.myInput.current.value})
                        console.log('data1 = ' + data1)
                        console.log('myInput = ' + this.myInput.current.value)
                        this.gotUserByID(data1)
                    }}
                    />
                }
            </div>
        );
    }

    getServUser = (e) => {
        let {data1} = this.state;
        // console.log('11')
        // console.log('getServUser')
        // console.log(this.myInput.current.value)
        // console.log(e.target.value)
        this.setState({data1: this.myInput.current.value})
        console.log(data1)
        // this.gotUserByID(2)
        // this.gotUserByID(this.data1)
        // this.myInput.current.value = this.state.data1
    }
}

export default Form1;
