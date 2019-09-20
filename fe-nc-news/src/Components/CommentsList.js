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
                {this.props.user ? <PostComment user={this.props.user} addComment={this.addComment} article_id={this.props.article_id}  /> : <h2>Login to post comment</h2>}
                <p className="comment_count">Comment count: {this.props.comment_count}</p>
                <ul className="comments">
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

    handleScroll = (event) => {
        const { p } = this.state;
        const element = event.target.scrollingElement;
        if (element.scrollHeight - element.scrollTop === element.clientHeight && p * 10 < this.props.comment_count) {
            this.fetchComments(p + 1)
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    componentDidUpdate(prevProps, prevState) {
        const { p } = this.state;
        const { article_id } = this.props;
        if (article_id !== prevProps.article_id) {
            this.fetchComments(p)
        }
    }

    fetchComments = (p) => {
        const { article_id } = this.props;
        if (article_id) {
            api.getComments(article_id, p).then(comments => {
                this.setState({ comments, err: null, isLoading: false, p })
            })
                .catch(err => {
                    this.setState({ err })
                })
        }
    }

    addComment = newComment => {
        this.setState((currentState) => {
            return { comments: [ newComment, ...currentState.comments] }
        })
    }

    removeComment = (id) => {
        api.deleteComment(id).then(() => {
            this.setState(currentState => {
                return { comments: currentState.comments.filter(comment => comment.comment_id !== id)}
            })
        })
            .catch(err => {
                this.setState({ err })
            })
    }
}

export default CommentsList;