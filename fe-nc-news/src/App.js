import React from 'react';
import './App.css';
import ArticlesList from './Components/ArticlesList';
import { Router } from '@reach/router';
import SingleArticle from './Components/SingleArticle';
import UsersList from './Components/UsersList';
import ErrorDisplay from './Components/ErrorDisplay';
import SingleUser from './Components/SingleUser';
import Footer from './Components/Footer';

class App extends React.Component {
  state = {
    user: ""
  }
    render() {
      return (
        <div className="App">
          <UsersList  user={this.state.user} updateUser={this.updateUser}/>
          <Router>
            <ArticlesList  path="/" />
            <ArticlesList  path="/articles" />
            <SingleArticle user={this.state.user} path="/articles/:id" />
            <SingleUser path="/users/:username" />
            <ErrorDisplay path="/*" />
          </Router>
          <Footer />
    
        </div>
      );
    }

    updateUser = (user) => {
      this.setState({ user })
    }
   
}

export default App;
