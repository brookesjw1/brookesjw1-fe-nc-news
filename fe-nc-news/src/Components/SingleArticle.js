import React, { Component } from 'react';
import * as api from '../api';
import CommentsList from './CommentsList';
import Header from './Header';
// import VoteIncrementer from './VoteIncrementer';
import ErrorDisplay from './ErrorDisplay';
// import { Link } from '@reach/router';
import SingleArticleCard from './SingleArticleCard';

class SingleArticle extends Component {
    state = {
        article: {},
        err: null
    }
    render() {
        const { article, err } = this.state;
        const dateStr = article.created_at
        const dateArr = dateStr && dateStr.slice(0,10).split("-")
        const date = dateArr && `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
        
        if (err) return <ErrorDisplay err={err} />
        return (
            <div className="SingleArticle">
                <Header />
                {/* <VoteIncrementer id={article.article_id} endpoint="articles" votes={article.votes} /> */}
                <SingleArticleCard votes={article.votes} id={article.article_id} date={date} author={article.author} title={article.title} body={article.body}/>
                {/* <p className="username"><Link to={`/users/${article.author}`}>nc/{article.author}</Link> Posted on: {date}</p>
                <h3>{article.title}</h3>
                <p className="article_body">{article.body}</p> */}
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
            this.setState({ article, err: null });
        })
            .catch(err => {
                this.setState({ err })
            })
    }
}

export default SingleArticle;