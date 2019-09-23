import React, { Component } from 'react';
import Header from './Header';
import * as api from '../api';
import LoadingPage from './LoadingPage';
import ArticleCard from './ArticleCard';

class SingleUser extends Component {
    state = {
        selectedUser: {},
        isLoading: true,
        articles: []
    }
    render() {
        const { selectedUser, isLoading } = this.state;
        if (isLoading) return <LoadingPage />
        const { username, avatar_url, name } = selectedUser;
        return (
            <main>
                <Header />
                Username: {username}
                <p>Name: {name}</p>
                <p><img src={avatar_url} alt={`${username} avatar`} /></p>
                <ul>
                    {this.state.articles.map(article => {
                           return <li key={article.article_id}><ArticleCard article={article} /></li>
                    })}
                </ul>
                
            </main>
        );
    }

    componentDidMount() {
        const { username } = this.props;
        api.fetchUser(username).then(selectedUser => {
            this.setState({ selectedUser, isLoading: false })
        })
        .then(() => {
            api.getArticles(null, null, null, 1, username).then(({ articles }) => {
               this.setState({ articles })
            })
        })
    }
}

export default SingleUser;