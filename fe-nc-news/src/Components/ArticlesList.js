import React, { Component } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard'
import SortArticles from './SortArticles';
import ErrorDisplay from './ErrorDisplay';
import LoadingPage from './LoadingPage';

class ArticlesList extends Component {
    state = {
        isLoading: true,
        articles: [],
        err: null
    }

    render() {
        const { isLoading, articles, err } = this.state;
        if (isLoading) return <LoadingPage />
        if (err) return <ErrorDisplay err={err}/>
        return (
            <div className="ArticlesList">
                <SortArticles fetchArticles={this.fetchArticles}/>
                <ul>
                    {articles.map(article => {
                        return <li key={article.article_id}><ArticleCard article={article} /></li>
                    })}
                </ul>
            </div>
        );
    }

    componentDidMount() {
       this.fetchArticles();
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.selectedTopic !== prevProps.selectedTopic) {
    //         this.fetchArticles(this.props.selectedTopic);
    //     }
    // }

    fetchArticles = (topic, sort_by, order) => {
        api.getArticles(topic, sort_by, order).then((articles) => {
            this.setState({ articles, isLoading: false, err: null })
        })
        .catch(err => {
            this.setState({ err })
        })
    }
}

export default ArticlesList;