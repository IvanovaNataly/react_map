import React, { Component } from "react";
import TopBar from './TopBar';
import Main from './Main';

import './general.scss';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            usersList: []
        };
        // this.getUsers();
    }

    render() {
        return (
            <div>
                <TopBar/>
                <Main/>
            </div>
        )
    }

}