import React, { Component } from 'react';

export default class Mondrian extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
            ]
        }
    }

    render() {
        return (
            <ul>
                {this.state.items.map(ele => <li key={ele} className="mondrian-items"></li>)}
            </ul>
        )
    }
}