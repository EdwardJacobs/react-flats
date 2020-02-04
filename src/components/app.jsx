import React, { Component } from 'react';
import Flat from "./flat";

import flats from "../../data/flats";


class App extends Component {

  render() {
    return (
      <div>
        <Flat imageUrl="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg" />
      </div>
    );
  }
}

export default App;
