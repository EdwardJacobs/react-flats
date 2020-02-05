import React from 'react';
import Flat from './flat';


const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat) => {
      return (
        <Flat
        flat={flat}
        key={flat.lat}
        selectFlat={props.selectFlat}
        />
      );
    });
  };
  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
