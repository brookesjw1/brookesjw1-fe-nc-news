import React from 'react';
import { Link } from '@reach/router';

const ResetHeader = (props) => {
    return (
        <nav className="Header">
            <Link onClick={props.resetState} to="/"><h1 className="HomePage">NC News</h1></Link>
        </nav>
    );
};

export default ResetHeader;