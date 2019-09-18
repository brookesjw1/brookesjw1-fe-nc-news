import React from 'react';
import Header from './Header';

const ErrorDisplay = ({err}) => {
    return (
        <div>
            <Header />
            Status {err.response.status || "404"}: {err.response.data.msg || "Not found"}
        </div>
    );
};

export default ErrorDisplay;