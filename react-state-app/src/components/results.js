import React, { Component } from "react";

class Results extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    votesDogInPercent() {
        if (this.store.getState().dog) {
            return (this.store.getState().dog / (this.store.getState().cat + this.store.getState().dog + this.store.getState().parrot)) * 100
        } else {
            return 0
        }
    }

    votesCatInPercent() {
        if (this.store.getState().cat) {
            return (this.store.getState().cat / (this.store.getState().cat + this.store.getState().dog + this.store.getState().parrot)) * 100
        } else {
            return 0
        }
    }

    votesParrotInPercent() {
        if (this.store.getState().parrot) {
            return (this.store.getState().parrot / (this.store.getState().cat + this.store.getState().dog + this.store.getState().parrot)) * 100
        } else {
            return 0
        }
    }

    votesDogStyle() {
        return {
            width: this.votesDogInPercent() + '%'
        }
    }

    votesCatStyle() {
        return {
            width: this.votesCatInPercent() + '%'
        }
    }

    votesParrotStyle() {
        return {
            width: this.votesParrotInPercent() + '%'
        }
    }
    render() {
        return (
            <div>
                <span className="label">
                    Dog: {this.votesDogInPercent().toFixed(2) + "%"}
                </span>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success" style={this.votesDogStyle()}></div>
                </div>
                <span className="label">
                    Cat: {this.votesCatInPercent().toFixed(2) + "%"}
                </span>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" style={this.votesCatStyle()}></div>
                </div>
                <span className="label">
                    Parrot: {this.votesParrotInPercent().toFixed(2) + "%"}
                </span>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-warning" style={this.votesParrotStyle()}></div>
                </div>
            </div>
        );
    }
}

export default Results;
