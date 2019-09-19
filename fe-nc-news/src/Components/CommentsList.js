import React, { Component } from 'react';
import * as api from '../api';
import PostComment from './PostComment';
import CommentDeleter from './CommentDeleter';
import VoteIncrementer from './VoteIncrementer';
import ErrorDisplay from './ErrorDisplay';
import { Link } from '@reach/router';
import LoadingPage from './LoadingPage';

class CommentsList extends Component {
    state = {
        comments: [],
        err: null,
        isLoading: true,
        p: 1
    }
    render() {
        const { err, comments, isLoading } = this.state;
        if (err) return <ErrorDisplay err={err} />
        if (isLoading) return <LoadingPage />
        return (
            <div >
                {this.props.user ? <PostComment user={this.props.user} addComment={this.addComment} article_id={this.props.article_id} users={this.props.users} /> : <h2>Login to post comment</h2>}
                <p className="comment_count">Comment count: {this.props.comment_count}</p>
                <ul >
                    {comments.map(comment => {
                        const dateArr = comment.created_at.slice(0, 10).split("-");
                        const date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
                        return <li className="commentsList" key={comment.comment_id}>
                            <p className="info">Posted by <Link to={`/users/${comment.author}`}>u/{comment.author}</Link> on {date} </p>
                            <VoteIncrementer id={comment.comment_id} endpoint="comments" votes={comment.votes} />
                            <p>
                            {this.props.user === comment.author && <CommentDeleter removeComment={this.removeComment} comment_id={comment.comment_id} />}</p>
                            <p className="CommentBody">{comment.body}</p>
                        </li>
                    })}

                </ul>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            const { p } = this.state;
            const element = event.target.scrollingElement;
            if (element.scrollHeight - element.scrollTop === element.clientHeight && p * 10 < this.props.comment_count) {
                this.fetchComments(p + 1)
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { p } = this.state;
        if (this.props.article_id !== prevProps.article_id) {
            this.fetchComments(p)
        }
        if (this.state.comments.length !== prevState.comments.length) {
            this.fetchComments(p)
        }
    }

    fetchComments = (p) => {
        if (this.props.article_id) {
            api.getComments(this.props.article_id, p).then(comments => {
                this.setState((currentState) => {
                    return { comments, err: null, isLoading: false, p }
                })
            })
                .catch(err => {
                    this.setState({ err })
                })
        }
    }

    addComment = newComment => {
        this.setState((currentState) => {
            return { comments: [newComment, ...currentState.comments] }
        })
    }

    removeComment = (id) => {
        api.deleteComment(id).then(delCount => {
            this.fetchComments();
        })
            .catch(err => {
                this.setState({ err })
            })
    }
}

export default CommentsList;