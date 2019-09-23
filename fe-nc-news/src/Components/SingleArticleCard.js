import React from 'react';
import { Link } from '@reach/router';
import VoteIncrementer from './VoteIncrementer';

const SingleArticleCard = (props) => {
    const { author, title, body, date, id, votes, topic } = props;
    return (
        <div className="SingleArticleCard">
            <VoteIncrementer id={id} endpoint="articles" votes={votes} />
               <p className="singleArticleInfo"><strong>{`nc/${topic}`}</strong> Posted by: <Link to={`/users/${author}`}>u/{author}</Link> on {date}</p>
                <h2 className="singleArticleTitle">{title}</h2>
                <p className="article_body">{body}</p>
        </div>
    );
};

export default SingleArticleCard;