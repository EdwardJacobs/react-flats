import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from "./flat_list";
import flats from "../../data/flats";
import Marker from "./marker";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats
    };
  }

    center() {
      return {
        lat: 59.95,
      lng: 30.33
      };
    }

  render() {
    return (
      <div className="container">
        <FlatList flats={this.state.flats} />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={59.95} lng={30.33} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
