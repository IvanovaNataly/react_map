import React, { Component } from "react";


export default class Map extends Component {
    constructor() {
        super();
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillReceiveProps({location, zoom}) {
        this.map.setCenter({lat: location.lat, lng: location.lng})
        this.map.setZoom(zoom)
    }

    getCoordinates() {
        let newCenter =  this.map.getCenter();
        let coordinates = {lat: newCenter.lat().toFixed(4),
                         lng: newCenter.lng().toFixed(4)}
        this.props.coordinates(coordinates);
    }
   
    componentDidMount() {
        this.map = new google.maps.Map(this.$map, {
          zoom: this.props.zoom,
          center: this.props.location
        });
        this.map.addListener('center_changed', () => { this.getCoordinates() });
    }

    render() {
        return (
            <div ref={ (el)=> {this.$map = el} } className="map"></div>
        )
    }
}


// componentDidMount() {
//         let location = this.props.location;
//         this.map = new google.maps.Map(document.getElementById('map'), {
//           zoom: this.props.zoom,
//           center: location
//         });
//     }

//     render() {
//         return (
//             <div id="map" className="map"></div>
//         )
//     }