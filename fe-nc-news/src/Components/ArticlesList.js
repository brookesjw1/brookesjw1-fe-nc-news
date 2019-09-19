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
        err: null,
        p: 1
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
    //    window.addEventListener('scroll', (event) => {
    //        const element = event.target.scrollingElement;
    //        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //            this.fetchArticles(this.state.p + 1)
    //        }
    //    })
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.selectedTopic !== prevProps.selectedTopic) {
    //         this.fetchArticles(this.props.selectedTopic);
    //     }
    // }

    fetchArticles = (topic, sort_by, order, p) => {
        api.getArticles(topic, sort_by, order, p).then((articles) => {
            this.setState({ articles, isLoading: false, err: null })
        })
        .catch(err => {
            this.setState({ err })
        })
    }
}

export default ArticlesList;