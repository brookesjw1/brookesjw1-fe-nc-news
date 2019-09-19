import React from 'react';
import Header from './Header';

const ErrorDisplay = ({err}) => {
    let status;
    let msg;
    if (err) {
         status = err.response.status;
            msg = err.response.data.msg;
    }
    
    return (
        <div>
            <Header />
            Status {status|| "404"}: {msg || "Not found"}
        </div>
    );
};

export default ErrorDisplay;