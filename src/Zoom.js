import React, { Component } from "react";

export default class Zoom extends Component {
    getZoom(e) {
        let newZoom = parseInt(e.target.value);
        this.props.onZoomChanged(newZoom);
    }

    render() {
        return (
            <div className="zoom-container">
                <p>Set you zoom:</p>
                <input className="zoom-input" onChange={ this.getZoom.bind(this) }></input>
            </div>
        )
    }
}