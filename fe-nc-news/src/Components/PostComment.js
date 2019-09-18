import React, { Component } from 'react';
import * as api from '../api';
import ErrorDisplay from './ErrorDisplay';

class PostComment extends Component {
    state = {
        body: "",
        err: null
    }
    render() {
        const { body, err } = this.state;
        if (err) return <ErrorDisplay err={err} />
        return (
            <div>
                    <form onSubmit={this.handleSubmit}>
                    <textarea placeholder="Type your comment here" value={body} className="body" onChange={this.handleChange} required></textarea>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({ body: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { body } = this.state;
        const { article_id } = this.props;
        const author = this.props.user;
        if ( author && body) {
            api.sendComment(article_id, author, body).then((newlyPostedComment) => {
                this.props.addComment(newlyPostedComment)
            }).catch(err => {
                this.setState({ err })
            })
            
        }
        this.setState({
            author: "",
            body: "",
            err: null
        })
    }

}

export default PostComment;