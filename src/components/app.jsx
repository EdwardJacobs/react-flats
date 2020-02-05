import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }
  render() {
    return (
      <div className='container'>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.selectedFlat}
        />
      </div>
    );
  }
}

export default App;
