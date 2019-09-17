import React from 'react';
import * as api from '../api';
import ResetHeader from './ResetHeader'

class SortArticles extends React.Component {
    state = {
        sort_by: "",
        order: "desc",
        topic: "",
        topics: []
    }

    render() {
        return (
            <div>
                <ResetHeader resetState={this.resetState}/>
                <form onSubmit={this.handleSubmit}>
                    Select articles by topic:
                <select  onChange={this.handleTopicSelection}>

                        <option key="all" value={undefined}>All topics</option>
                        {this.state.topics.map(topic => {
                            return <option key={topic.slug}>{topic.slug}</option>
                        })}
                    </select>
                    Sort by:
                <select onChange={this.handleSortBy}>
                        <option value=""></option>
                        <option value="created_at">Date created</option>
                        <option value="comment_count">Comment count</option>
                        <option value="votes">Votes</option>
                    </select>
                    <input type="radio" value="asc" name="sortOrder" onClick={this.handleSortOrder} />Asc
                <input type="radio" value="desc" defaultChecked={true} name="sortOrder" onClick={this.handleSortOrder} />Desc
                <button>Submit</button>
                </form>
            </div>

        );
    }

    resetState = () => {
        this.setState({sort_by: "",
        order: "",
        topic: ""})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.order === "") {
            this.props.fetchArticles()
        }
    }

    componentDidMount() {
        this.fetchTopics()
    }

    fetchTopics = () => {
        api.getTopics().then(topics => {
            this.setState({ topics });
        })
    }


    handleTopicSelection = (event) => {
        event.preventDefault();
        let topic = event.target.value;
        if (topic === "All topics") topic = undefined;
        this.setState({ topic });
    }

    handleSortBy = (event) => {
        this.setState({ sort_by: event.target.value })
    }

    handleSortOrder = (event) => {
        this.setState({ order: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { topic, sort_by, order } = this.state;
        if (!order) order = "desc";
        this.props.fetchArticles(topic, sort_by, order);
    }

};

export default SortArticles;