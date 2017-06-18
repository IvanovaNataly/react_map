import React, {Component} from 'react';

export default ({coordinates}) => {
    return (
        <div className="coordinates">
            <h2>Current Location</h2>
            <p className="coordinates-item">{coordinates.lat}° N </p>
            <p className="coordinates-item">{coordinates.lng}° E</p>
	    </div>
    )
}
    
