import React from 'react';
import * as api from '../api';
import ResetHeader from './ResetHeader'

class SortArticles extends React.Component {
    state = {
        sort_by: "",
        order: "desc",
        topic: "",
        topics: [],
        p: 1
    }

    render() {
        return (
            <div>
                <ResetHeader resetState={this.resetState} />
                <form onSubmit={this.handleSubmit}>
                    Select articles by topic:
                <select value={this.state.topic} onChange={this.handleTopicSelection}>

                        <option key="all" value="all" >All topics</option>
                        {this.state.topics.map(topic => {
                            return <option key={topic.slug}>{topic.slug}</option>
                        })}
                    </select>
                    Sort by:

                <select value={this.state.sort_by} onChange={this.handleSortBy}>
                        <option value=""></option>
                        <option value="created_at">Date created</option>
                        <option value="comment_count">Comment count</option>
                        <option value="votes">Votes</option>
                    </select>
                    <input type="radio" value="asc" checked={this.state.order === "asc"} name="sortOrder" onChange={this.handleSortOrder} />Asc
                <input type="radio" value="desc" checked={this.state.order === "desc" || this.state.order === ""} name="sortOrder" onChange={this.handleSortOrder} />Desc
                <button>Submit</button>
                </form>
            </div>

        );
    }

    resetState = () => {
        this.setState({
            sort_by: "",
            order: "",
            topic: "",
            p: 1
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.order === "" && this.state.order !== prevState.order) {
            this.props.fetchArticles()
        }
       
    }

    componentDidMount() {
        this.fetchTopics();
        window.addEventListener('scroll', (event) => {
            const { topic, sort_by, order, p } = this.state;
            const { total_count } = this.props;
                   const element = event.target.scrollingElement;
                   if (element.scrollHeight - element.scrollTop === element.clientHeight && p < total_count / 10) {
                       this.props.fetchArticles(topic, sort_by, order, p + 1 );
                       this.setState(currentState => {
                           return { p: currentState.p+1}
                       })
                   }
               })
    }

    fetchTopics = () => {
        api.getTopics().then(topics => {
            this.setState({ topics });
        })
    }


    handleTopicSelection = (event) => {
        let topic = event.target.value;
        if (topic === "all") topic = undefined;
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