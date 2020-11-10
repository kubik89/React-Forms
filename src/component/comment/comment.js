import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        let {oneComment} = this.props;
        this.state = {oneComment}
    }

    getData = () => {
        let {oneComment} = this.state;
        console.log(oneComment);
        let statusRead = this.state;
        this.statusRead = 'read'
        this.setState(statusRead)
    }

    statusRead = 'unread'

render() {
    let {oneComment} = this.props;
    let oneByIDComm = this.props.getOneByIDComm;
    return (

        <div>
            <button onClick={() => oneByIDComm(oneComment.id)}>test</button>
            <button onClick={this.getData}>get data</button>
            {this.statusRead} -
            {oneComment.id} -
            {oneComment.name} -
            {oneComment.email} -
            {oneComment.body} -

        </div>
    );
}
}

export default Comment;
