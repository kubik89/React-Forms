import React, {Component} from 'react';

class Tree extends Component {
    constructor(props) {
        super(props);
        let {someTree} = this.props;
        this.state = {someTree}
        let maxAgeS = 'agestyle';
    }

    render() {
        let {someTree} = this.props;
        return (
            <div>
                name:
                <p className='treeName'>{someTree.name}</p>
                Max. age:
                <p className={this.maxAgeS}>{someTree.maxAge}</p>
                Max. high:
                <p className='maxHigh'>{someTree.maxHigh}</p>
                <button onClick={this.addTreeYear} className='addTreeB'>+</button>
                <button onClick={this.decreaseTreeYear} className='addTreeB'>-</button>
            </div>
        );
    }

    addTreeYear = () => {
        let {someTree} = this.state;
        someTree.maxAge = someTree.maxAge + 20;
        this.setState({someTree});
        console.log(someTree.maxAge)
        if (someTree.maxAge >= 200) {
            this.maxAgeS = 'newMaxAgeStyle'
            console.log(this.maxAgeS)
        } else this.maxAgeS = 'agestyle'
    }

    decreaseTreeYear = () => {
        let {someTree} = this.state;
        someTree.maxAge = someTree.maxAge - 20;
        this.setState({someTree});
        console.log(someTree.maxAge)
        if (someTree.maxAge >= 200) {
            this.maxAgeS = 'newMaxAgeStyle'
            console.log(this.maxAgeS)
        } else this.maxAgeS = 'agestyle'
    }
}

export default Tree;
