import React from 'react';
import * as api from '../api';
import { Modal, Button } from 'react-bootstrap';

class UsersList extends React.Component {
    state = {
        users: [],
        user: ""
    }

    render() {
        const { users } = this.state
        return (
            <div className="UsersList">
                <label htmlFor="UsersList"> Select your username:</label>
               
                        <select id="UsersList" onChange={(event) => this.setState({ user: event.target.value })}>
                    <option value=""></option>
                    {users.map(user => {
                        return <option key={user.username}>{user.username}</option>
                    })}
                </select>
                <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                            <Button variant="primary" onClick={() => this.props.handleSubmit(this.state.user)}>Login</Button>
                        </Modal.Footer>
            </div>
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