import React from 'react';

const UsersList = (props) => {
        return (
            <div>
                Username:
                        <select onChange={(event) => props.updateUser(event.target.value)}>
                    <option value=""></option>
                    {props.users.map(user => {
                        return <option key={user}>{user}</option>
                    })}
                </select>
            </div>
        );
    

    // handleChange = (event) => {
    //     this.setState({ input: event.target.value })
    // }
};

export default UsersList;