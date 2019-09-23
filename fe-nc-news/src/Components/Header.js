import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
    return (
        <nav className="Header">
            <Link to="/"><h1 className="HomePage">NC News</h1></Link>
        </nav>
    );
};

export default Header;