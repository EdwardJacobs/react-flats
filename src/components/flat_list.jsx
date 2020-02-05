import React, {Component} from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    const renderList = (props) => {
      return this.props.flats.map((flat) => {
        return (
          <Flat
            flat={flat}
            selectedFlat={this.props.selectedFlat}
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
