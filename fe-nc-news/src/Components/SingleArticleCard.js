import React from 'react';
import { Link } from '@reach/router';
import VoteIncrementer from './VoteIncrementer';

const SingleArticleCard = (props) => {
    const { author, title, body, date, id, votes } = props;
    return (
        <div className="SingleArticleCard">
            <VoteIncrementer id={id} endpoint="articles" votes={votes} />
               <p className="username"><Link to={`/users/${author}`}>nc/{author}</Link> Posted on: {date}</p>
                <h3>{title}</h3>
                <p className="article_body">{body}</p>
        </div>
    );
};

export default SingleArticleCard;