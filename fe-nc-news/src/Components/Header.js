import React from 'react';
// import { Link } from '@reach/router';
import { Navbar, Button, Modal } from 'react-bootstrap';
import UsersList from './UsersList';

class Header extends React.Component {
    state = {
        show: false
    }

    render() {
        const { show } = this.state;
        return (
            <nav className="Header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">NC News</Navbar.Brand>
                    <Navbar.Text>{this.props.user && `Logged in as ${this.props.user}`}</Navbar.Text>
                    <Navbar.Collapse className="justify-content-end">
                        {this.props.user ? <Button onClick={this.handleLogout} variant="outline-light">Logout</Button> : <Button onClick={this.handleShow} variant="outline-light">Login</Button>}
                        
                    </Navbar.Collapse>
                    <Modal show={show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select your user here:</Modal.Title>
                        </Modal.Header>
                        <UsersList user={this.props.user} updateUser={this.props.updateUser} handleClose={this.handleClose} handleSubmit={this.handleSubmit} />
                        
                    </Modal>
                </Navbar>
            </nav>
        );
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    handleSubmit = (user) => {
        this.props.updateUser(user);
        this.setState({ show: false })
    }

    handleLogout = () => {
        this.props.updateUser("")
    }
};

export default Header;