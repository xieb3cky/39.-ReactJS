import React, { Component } from "react";

class Joke extends Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }
    upVote() {
        this.props.vote(this.props.id, +1);
    }

    downVote() {
        this.props.vote(this.props.id, -1);
    }


    render() {
        return (
            <div>
                <p>{this.props.votes}</p>
                <button onClick={this.upVote}>
                    <i className="fas fa-thumbs-up" />
                </button>
                <button onClick={this.downVote}>
                    <i className="fas fa-thumbs-down" />
                </button>

                <li>
                    {this.props.text}
                </li>
            </div>

        )
    }
}

export default Joke;