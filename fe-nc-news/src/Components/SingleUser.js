import React, { Component } from 'react';
import Header from './Header';
import * as api from '../api';
import LoadingPage from './LoadingPage';

class SingleUser extends Component {
    state = {
        selectedUser: {},
        isLoading: true,
    }
    render() {
        const { selectedUser, isLoading } = this.state;
        if (isLoading) return <LoadingPage />
        const { username, avatar_url, name } = selectedUser;
        return (
            <div>
                <Header />
                Username: {username}
                <p>Name: {name}</p>
                <p><img src={avatar_url} alt={`${username} avatar`} /></p>
                
                
            </div>
        );
    }

    componentDidMount() {
        const { username } = this.props;
        api.fetchUser(username).then(selectedUser => {
            this.setState({ selectedUser, isLoading: false })
        })
    }
}

export default SingleUser;