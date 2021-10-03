import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow, Circle } from 'react-google-maps';

function Map() {
    return(
        <GoogleMap defaultZoom={6} defaultCenter={{lat: 41.53, lng: 12.30}}>
            <Marker
                key={1}
                position={{ lat: 45.26, lng: 12.20 }}
                title="Venice"
                icon={'https://maps.google.com/mapfiles/ms/icons/green-dot.png' }
                // onClick={this.selectPin.bind(this, value.id, 'pickup', value)}
            />
            <Marker
                key={1}
                position={{ lat: 43.46, lng: 11.15 }}
                title="Vatican City"
                icon={'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' }
                // onClick={this.selectPin.bind(this, value.id, 'pickup', value)}
            />
        </GoogleMap>
    )
}

// green dot - 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
// blue dot - 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Main() {
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAMmOExLPTjegKWt1pRi8bC2b_PKPzwTnw"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />} 
                mapElement={<div style={{ height: `100%` }} />}
                />
        </div>
    
    )
};
