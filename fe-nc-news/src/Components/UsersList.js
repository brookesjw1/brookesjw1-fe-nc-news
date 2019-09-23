import React from 'react';
import * as api from '../api';

class UsersList extends React.Component {
    state = {
        users: []
    }

    render() {
        const { users } = this.state
        return (
            <header className="UsersList">
                <label htmlFor="UsersList"> Select your username:</label>
               
                        <select id="UsersList" onChange={(event) => this.props.updateUser(event.target.value)}>
                    <option value=""></option>
                    {users.map(user => {
                        return <option key={user.username}>{user.username}</option>
                    })}
                </select>
                <p className="Login">{this.props.user &&`Logged in as ${this.props.user}`}</p>
            </header>
        );
    }
    
    componentDidMount() {
        api.getUsers().then(users => {
            this.setState({ users })
        })
    }
    

    // handleChange = (event) => {
    //     this.setState({ input: event.target.value })
    // }
};

export default UsersList;