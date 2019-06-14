import React, { Component } from 'react';
import IncrementButton from './increment-button';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleClick = () => {
        this.setState(({ count })=> ({
            count : count + 1
        }));
    };

    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton onClick={this.handleClick} />
            </div>
        );
    }
}
