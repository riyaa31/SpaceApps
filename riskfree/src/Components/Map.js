import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow, Circle } from 'react-google-maps';
import * as data from './landslides.json'

function Map() {
    const [one, setOne] = useState(null)
    const latitudes = data.default[0].latitude // 1
    const longitudes = data.default[0].longitude // 2
    const size = data.default[0].landslide_size // 3
    const type = data.default[0].landslide_type // 4
    const trigger = data.default[0].trigger // 5
    const population = data.default[0].population // 6
    const date = data.default[0].Date // 7
    const list = []
    for (let i = 0; i < 54; i++) {
        list.push([latitudes[i], longitudes[i], size[i], type[i], trigger[i], population[i], date[i]])
      }
      console.log(list)
    return(
        <div><GoogleMap defaultZoom={6} defaultCenter={{lat: 41.53, lng: 12.30}}>
            {list.map((slide) => <Marker
                key={1}
                position={{ lat: slide[0], lng: slide[1] }}
                title="Venice"
                icon={ slide[2] === 'Medium' ? 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' : slide[2] === 'Large' ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'}
                onClick={() => setOne(slide)}
            />)}
            {one && (<InfoWindow position={{ lat: one[0], lng: one[1] }}>
                    <div>
                        <p>Type: {one[3]} </p>
                        <p>Size: {one[2]} </p>
                        <p>Trigger: {one[4]}</p>
                        <p>Population: {one[5]}</p>
                    </div>
                </InfoWindow>)}
        </GoogleMap></div>
        
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
