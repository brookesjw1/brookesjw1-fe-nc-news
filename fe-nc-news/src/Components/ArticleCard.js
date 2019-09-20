import React from 'react';
import { Link } from '@reach/router';
import VoteIncrementer from './VoteIncrementer';

const ArticleCard = ({ article }) => {
    const dateArr = article.created_at.slice(0,10).split("-");
    const date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
    return (
        <div className="ArticleCard">
            <VoteIncrementer endpoint="articles" id={article.article_id} votes={article.votes}/>
            <p className = "info"><strong>nc/{article.topic}</strong> Posted by: <Link className="userLink" to={`/users/${article.author}`}>u/{article.author}</Link> on {date}</p>
            <p className="comment_count">Comments: {article.comment_count}</p>
            <h3 className="ArticleTitle"><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3>
        </div>
    );
};

export default ArticleCard;