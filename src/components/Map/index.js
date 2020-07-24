//! == Import : npm ==
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 44.8354524, lng: -0.5760399 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 44.8354524, lng: -0.5760399 }} />}
  </GoogleMap>
))

const Map = () => (
    <MapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?AIzaSyAsjtnFDYKxAjdxph5EOiTzPXZOJHvLD7w&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
);

//! == Export ==
export default Map;
