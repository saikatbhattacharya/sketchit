import React from 'react';
// import PropTypes from 'prop-types';
// import { Button } from 'semantic-ui-react';
// import TopHeader from './Topbar';
// import BottomPane from './BottomPane';
import Stepper from './Stepper';
import StepperBody from './StepperBody';

require('styles/app.scss');

const App = () => (
  <div className="container stepContainer">
    <Stepper
      className="stepperHead"
      isStep1Completed
    />
    <StepperBody />
  </div>
);

App.propTypes = {
  // isAuthenticated: PropTypes.number.isRequired,
  // authenticate: PropTypes.func.isRequired,
};

export default App;
