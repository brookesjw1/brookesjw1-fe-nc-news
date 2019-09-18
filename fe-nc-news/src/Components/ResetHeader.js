import React from 'react';
import { Link } from '@reach/router';

const ResetHeader = (props) => {
    return (
        <div className="ResetHeader">
            <Link onClick={props.resetState} to="/"><h1>NC News</h1></Link>
        </div>
    );
};

export default ResetHeader;