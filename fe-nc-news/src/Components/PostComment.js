import React, { Component } from 'react';
import * as api from '../api';

class PostComment extends Component {
    state = {
        // author: "",
        body: ""
    }
    render() {
        return (
            <div>
                    <h2>{!this.props.user && "You must login to post a comment"}</h2>
                    <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.body} className="body" onChange={this.handleChange}></textarea>
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
            });
            
        }
        this.setState({
            author: "",
            body: "",
        })
    }

}

export default PostComment;