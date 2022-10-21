import React from "react";
import axios from "axios";
import Joke from "./Joke";


class Jokes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        };
        this.newJokes = this.newJokes.bind(this);
        this.getJokes = this.getJokes.bind(this);
        this.vote = this.vote.bind(this);

    }

    /**
     * When the page loads, the application fetches 10 jokes, 
     * making sure that no joke appears more than once on the page.
     * 
     * 
     * 
     */

    /* at mount, get jokes */

    componentDidMount() {
        if (this.state.jokes.length < 10) {
            this.getJokes();
        }
    }


    componentDidUpdate() {
        if (this.state.jokes.length < 10) {
            this.getJokes();
        }
    }


    /**get 10 jokes from API */
    async getJokes() {
        let jokes = this.state.jokes;
        //create a set of jokes that only appeared once on page
        let uniqueJokes = new Set();

        try {
            while (jokes.length < 9) {
                let res = await axios.get("https://icanhazdadjoke.com/", {
                    headers: { Accept: "application/json" }
                });

                let { id, joke } = res.data;

                //logic to check if joke appeared in the uniqueJokes by joke's id
                if (uniqueJokes.has(id)) {
                    console.log("duplicated joke")
                } else {
                    uniqueJokes.add(id);
                    jokes.push({ joke, id, votes: 0 })

                }
            }
            this.setState({ jokes });
        }
        catch (e) {
            console.log(e)
        }
    }

    // set jokes to empty list, then get new jokes

    newJokes() {
        this.setState(state => ({ jokes: [] }))
    }

    vote(id, delta) {
        this.setState(state => ({
            jokes: state.jokes.map(joke => (
                joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
            ))
        }))
    }

    render() {

        return (
            <div>
                <button onClick={this.newJokes}>New Jokes!</button>
                <div>
                    <ol>
                        {this.state.jokes.map(j => (

                            <Joke
                                text={j.joke}
                                key={j.id}
                                id={j.id}
                                vote={this.vote}
                                votes={j.votes}
                            />
                        ))}
                    </ol>

                </div>

            </div>
        )

    }
}

export default Jokes;