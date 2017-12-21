import React from 'react';
import { Row } from 'react-bootstrap';
import logo from 'images/logo.jpg';
import SearchBox from './SearchBox';

require('styles/app.scss');

const TopHeader = () => (
  <Row className="TopBar">
    <div className="topImage"><img id="topLogo" src={logo} alt="logo" /></div>
    <div className="topSearch"><SearchBox /></div>
  </Row>
);
export default TopHeader;
