import React, { Component } from "react";

export default class LocationInput extends Component {
    constructor() {
        super();
        this.location = { lat: 32.0042938, lng: 34.7615399 };
        this.anlocation = { lat: 32.0042938, lng: 134.7615399 };
        this.locations = [
            { name: "Tel Aviv", location: {lat: 32.0853, lng: 34.7818 } },
            { name: "New York", location: {lat: 40.712784, lng: -74.005941 } },
            { name: "Paris", location: {lat:48.856614, lng: 2.352222 } },
            { name: "Bangkok", location: {lat:13.756331, lng: 100.501765 }},
            { name: "Moscow", location: {lat:55.7558, lng: 37.6173 }},
            { name: "Tokyo", location: {lat:35.6895, lng: 139.6917 }}
        ]
    }

    renderButtons() {
        return this.locations.map((item) =>  
            <button className="btn-location" key={item.name} id={item.name} onClick={ () => this.props.onLocationClicked(item.location) }>{item.name}</button>
        )
    }

    render() {
        return (
            <div className="btn-scope">
                {this.renderButtons()}
            </div>
        )
    }
}
