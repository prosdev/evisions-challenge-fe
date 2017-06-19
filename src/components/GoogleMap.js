import React, {Component} from 'react';
var GoogleMapsLoader = require('google-maps'); // only for common js environments
import config from '../../config';

class GoogleMap extends Component {
    /**
     * Fetches appropriate google map data on componentDidMount
     *
     * @event componentDidMount
     * @return {undefined}
     */
    componentDidMount() {
        GoogleMapsLoader.KEY = config.GOOGLEMAP_API;
        GoogleMapsLoader.load((google) => {
            new google.maps.Map(this.refs.map, {
                zoom: 9,
                center : {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
            })
        });
        console.log('Loaded');
        GoogleMapsLoader.onLoad(function(google) {
            console.log('I just loaded google maps api');
        });
    }

    render() {

        return (
            <div
                ref="map"
                 style={this.props.mapStyle}
            />
        )
    }
}

export default GoogleMap;