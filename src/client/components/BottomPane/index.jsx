import React from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import ItemBox from './ItemBox';

require('styles/app.scss');

const staticItems = [
  {
    itemName: 'iPhone 6s black',
    price: 'AED 1000',
  },
  {
    itemName: 'iPhone 7 black',
    price: 'AED 2000',
  },
  {
    itemName: 'iPhone 8 black',
    price: 'AED 3000',
  },
];

const BottomPane = () => (
  <Row className="bottomPane">
    {
      _.map(staticItems, each => (
        <Col sm={12} md={4}><ItemBox itemName={each.itemName} price={each.price} /></Col>
      ))
    }
  </Row>
);
export default BottomPane;
