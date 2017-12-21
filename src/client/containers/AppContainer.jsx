import { connect } from 'react-redux';
import App from 'components/App';
import actions from 'actions/actionCreators';

const mapStateToProps = state => ({
  isAuthenticated: state.actionReducer.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  authenticate: (reqObj) => {
    dispatch(actions.authenticate(reqObj));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
