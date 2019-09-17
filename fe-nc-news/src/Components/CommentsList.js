import React, { Component } from 'react';
import * as api from '../api';
import PostComment from './PostComment';
import CommentDeleter from './CommentDeleter';

class CommentsList extends Component {
    state = {
        comments: []
    }
    render() {
        return (
            <div >
                <PostComment user={this.props.user} addComment={this.addComment} article_id={this.props.article_id} users={this.props.users}/>
                <ul >
                {this.state.comments.map(comment => {
                     const dateArr = comment.created_at.slice(0,10).split("-");
                     const date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
                   return  <li className="commentsList" key={comment.comment_id}><p>nc/{comment.author} {date} Votes: {comment.votes}</p>
                   <p>Vote Up</p><p>Vote down</p>
                   <p>{this.props.user === comment.author && <CommentDeleter comment_id={comment.comment_id}/>}</p>
                   {comment.body}</li>
                })}

                </ul>
            </div>
        );
    }

    // componentDidMount() {
    //     this.fetchComments();
    // }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.article_id !== prevProps.article_id) {
            this.fetchComments()
        }
        if (this.state.comments.length !== prevState.comments.length) {
            this.fetchComments()
        }
    }

    fetchComments = () => {
        if (this.props.article_id) {
            api.getComments(this.props.article_id).then(comments => {
                this.setState({ comments })
            })
        }
    }

    addComment = newComment => {
        this.setState((currentState) => {
            return { comments: [newComment, ...currentState.comments]}
        })
    }
}

export default CommentsList;