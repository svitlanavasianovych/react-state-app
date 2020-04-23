import React, { Component } from "react";
import { voteDog, voteCat, voteParrot } from "./actions";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  handleVoteDog = () => {
    this.store.dispatch(voteDog());
  };

  handleVoteCat = () => {
    this.store.dispatch(voteCat());
  };

  handleVoteParrot = () => {
    this.store.dispatch(voteParrot());
  };

  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: "center" }}>
          <img src="main_logo.jpeg" height="96" alt="animalLogo"></img>
          <h2>What is your favorite animal for home?</h2>
          <h4>Click on it below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-sm">
              <img
                src="dog.jpeg"
                height="96"
                alt="dog"
                onClick={this.handleVoteDog}
              ></img>
            </div>
            <div className="col-sm">
              <img
                src="cat.jpeg"
                height="96"
                alt="cat"
                onClick={this.handleVoteCat}
              ></img>
            </div>
            <div className="col-sm">
              <img
                src="parrot.jpeg"
                height="96"
                alt="parrot"
                onClick={this.handleVoteParrot}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
