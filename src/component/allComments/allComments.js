import React, {Component} from 'react';
import {CommentService} from "../../services/commentService";
import Comment from "../comment/comment";

class AllComments extends Component {
    _commentService = new CommentService();
    state = {
        allComments: [],
        comment: null
    }

    componentDidMount() {
        this._commentService.getAllComments().then(value => {
            this.setState({allComments: value});
        })
    }

    getOneByIDApp = (id) => {
        let filter = this.state.allComments.filter(value => value.id === id);
        // console.log(filter)
        this.setState({comment: filter[0]})
    }

    render() {
        let {comment} = this.state;
        return (
            <div>
                {
                    this.state.allComments.map(value =>
                        (<Comment
                            oneComment={value} id={value.id}
                            getOneByIDComm={this.getOneByIDApp()}/>
                        ))
                }
                <hr/>
                {
                    comment && (<Comment getOneByIDComm={comment}/>)
                }
            </div>
        );
    }
}

export default AllComments;
