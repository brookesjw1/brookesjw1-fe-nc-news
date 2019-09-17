import React from 'react';
import { Link } from '@reach/router';

// needs to be fixed so that default values are linked when state is reset

const ResetHeader = (props) => {
    return (
        <div className="ResetHeader">
            <Link onClick={props.resetState} to="/"><h1>Reset NC News</h1></Link>
        </div>
    );
};

export default ResetHeader;