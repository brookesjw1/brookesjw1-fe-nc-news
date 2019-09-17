import React from 'react';
import './App.css';
import ArticlesList from './Components/ArticlesList';
import { Router } from '@reach/router';
import SingleArticle from './Components/SingleArticle';
import UsersList from './Components/UsersList';

class App extends React.Component {
  state = {
    users: ["jessjelly", "grumpy19", "tickle122"],
    user: ""
  }
    render() {
      return (
        <div className="App">
          <h4>{this.state.user ? `Logged in as ${this.state.user}` : "Login here"}</h4>
          <UsersList users={this.state.users} updateUser={this.updateUser}/>
          <Router>
            <ArticlesList  path="/" />
            <SingleArticle user={this.state.user} path="/articles/:id" />
          </Router>
    
        </div>
      );
    }

    updateUser = (user) => {
      this.setState({ user })
    }
   
}

export default App;
