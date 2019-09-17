import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({ article }) => {
    const dateArr = article.created_at.slice(0,10).split("-");
    const date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
    return (
        <div className="ArticleCard">
            <p className = "up">↑</p>
            <p className = "username">nc/{article.author} {date}</p>
            <p className="comment_count">Comments: {article.comment_count} Votes: {article.votes}</p>
            <p className="down">↓</p>
            <h3 className="article_title"><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3>
            <p>Topic: {article.topic}</p>
        </div>
    );
};

export default ArticleCard;