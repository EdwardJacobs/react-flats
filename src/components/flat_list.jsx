import React, {Component} from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    const renderList = (props) => {
      return this.props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={flat.lat}
            index={index}
            selectedFlat={this.props.selectedFlat}
            selectFlat={this.props.selectFlat}
          />
        );
      });
    };

    return (
      <div className='flat-list'>
        {renderList()}
      </div>
    );
  }
}

export default FlatList;
