import React, { Component } from "react";
import LocationInput from './LocationInput';
import Map from './Map';
import Zoom from './Zoom';
import CoordinatesOutput from "./CoordinatesOutput";

import './main.scss';

export default class Main extends Component {
    constructor() {
        super();
        let startPoint = { lat: 32.0042938, lng: 34.7615399 };
        this.state = {
            center: startPoint,
            zoom: 12,
            coordinates: startPoint
        }
    }
    setLocation(newlocation) {
        this.setState({ center: newlocation })
    }

    setNewZoom(zoom) {
        this.setState({ zoom })
    }

    setCoordinates(coordinates) {
        this.setState({ coordinates })
    }

    render() {
        
        return (
            <div className="main" >
                <aside className="side-bar">
                    <LocationInput onLocationClicked={ this.setLocation.bind(this) }/>
                    <Zoom onZoomChanged={ this.setNewZoom.bind(this) }/>
                    <CoordinatesOutput coordinates={this.state.coordinates} />
                </aside>
                <Map location={this.state.center} zoom={this.state.zoom} coordinates={ this.setCoordinates.bind(this) }></Map>
            </div>
        )
    }
}
