import React, { Component } from 'react';
import * as api from '../api';
import CommentsList from './CommentsList';
import Header from './Header';

class SingleArticle extends Component {
    state = {
        article: {}
    }
    render() {
        const { article } = this.state;

        return (
            <div>
                <Header />
                <p className="up">↑</p>
                <p className="down">↓</p>
                <p className="username">nc/{article.author}</p>
                <p className="comment_count">Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <CommentsList users={this.props.users} user={this.props.user} article_id={article.article_id} />
            </div>
        );
    }

    componentDidMount() {
        this.fetchArticleByID()
    }


    fetchArticleByID = () => {
        const { id } = this.props;
        api.getArticleByID(id).then(article => {
            this.setState({ article });
        })
    }
}

export default SingleArticle;