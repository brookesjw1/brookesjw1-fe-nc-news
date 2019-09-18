import React from 'react';

const CommentDeleter = (props) => {
    // console.log(props)
    // every comment id is coming down at the moment - needs to be looked into
        return (
            <button onClick={() => props.removeComment(props.comment_id)} type="submit">Delete comment</button>
    ); 
};

export default CommentDeleter;