import React, { Component } from 'react';
import * as api from '../api';

class VoteIncrementer extends Component {
    state = {
        voteChange: 0,
        err: null
    }

    render() {
        const { voteChange, err } = this.state;
        return (
            <div className="voteIncrementer">
                <button className="voteButton" onClick={() => this.updateVotes(1)} disabled={voteChange === 1}><strong className="arrow">⬆</strong></button>
                <p className="votes">Votes: {this.props.votes + voteChange}</p>
                <button className="voteButton" onClick={() => this.updateVotes(-1)} disabled={voteChange === -1}><strong className="arrow">⬇</strong></button>
                {err && `${err.status}: ${err.msg}`}
            </div>
        );
    }

    updateVotes = (voteDiff) => {
        const { id, endpoint } = this.props;
        this.setState(currentState => {
            return { voteChange: currentState.voteChange + voteDiff, err: null }
        })
        api.patchVotes(endpoint, voteDiff, id).catch(err => {
            const errObj = { status: 500, msg: "Request can not be carried out at this time"};
            this.setState(currentState => {
                return { err: errObj, voteChange: currentState.voteChange - voteDiff }
            })
        })
    }
}

export default VoteIncrementer;