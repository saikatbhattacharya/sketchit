import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Step } from 'semantic-ui-react';

const Stepper = props => (
  <Step.Group>
    <Step className={props.step1ClassName} disabled={!props.isStep1Completed}>
      <Icon name="wizard" />
      <Step.Content>
        <Step.Title>CSS</Step.Title>
        <Step.Description>Choose your css framework</Step.Description>
      </Step.Content>
    </Step>

    <Step className={props.step2ClassName} disabled={props.isStep2Completed}>
      <Icon name="settings" />
      <Step.Content>
        <Step.Title>Javascript</Step.Title>
        <Step.Description>Choose your javascript framework</Step.Description>
      </Step.Content>
    </Step>

    <Step className={props.step3ClassName} disabled={props.isStep3Completed}>
      <Icon name="send" />
      <Step.Content>
        <Step.Title>Confirm</Step.Title>
        <Step.Description>Opt for accessories</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

Stepper.defaultProps = {
  isStep1Completed: false,
  isStep2Completed: false,
  isStep3Completed: false,
};

Stepper.propTypes = {
  step1ClassName: PropTypes.string.isRequired,
  step2ClassName: PropTypes.string.isRequired,
  step3ClassName: PropTypes.string.isRequired,
  isStep1Completed: PropTypes.bool,
  isStep2Completed: PropTypes.bool,
  isStep3Completed: PropTypes.bool,
};

export default Stepper;
