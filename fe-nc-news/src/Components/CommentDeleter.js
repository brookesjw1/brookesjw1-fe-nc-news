import React from 'react';

const CommentDeleter = (props) => {
        return (
            <button className="CommentDeleter" onClick={() => props.removeComment(props.comment_id)} type="submit">Delete comment</button>
    ); 
};

export default CommentDeleter;