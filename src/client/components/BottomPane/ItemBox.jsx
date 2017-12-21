import React from 'react';
import PropTypes from 'prop-types';
import CarrefourLogo from 'images/logo-vertical.jpg';

require('styles/app.scss');

const BottomPane = props => (
  <div className="itemDiv">
    <div className="bottomLogo">
      <img src={CarrefourLogo} alt="logo" />
    </div>
    <div className="itemDesc">
      <p>{props.itemName}</p>
      <p className="itemprice">{props.price}</p>
    </div>
  </div>
);

BottomPane.propTypes = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BottomPane;
