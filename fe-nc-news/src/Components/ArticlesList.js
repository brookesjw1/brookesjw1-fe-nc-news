import React, { Component } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard'
import SortArticles from './SortArticles';

class ArticlesList extends Component {
    state = {
        isLoading: true,
        articles: []
    }

    render() {
        if (this.state.isLoading) return (<h1>...Loading</h1>)
        return (
            <div className="ArticlesList">
                <SortArticles fetchArticles={this.fetchArticles}/>
                <ul>
                    {this.state.articles.map(article => {
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
            this.setState({ articles, isLoading: false })
        })
    }
}

export default ArticlesList;