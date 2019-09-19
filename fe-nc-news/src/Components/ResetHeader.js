import React from 'react';
import { Link } from '@reach/router';

const ResetHeader = (props) => {
    return (
        <div className="Header">
            <Link onClick={props.resetState} to="/"><h1 className="HomePage">NC News</h1></Link>
        </div>
    );
};

export default ResetHeader;