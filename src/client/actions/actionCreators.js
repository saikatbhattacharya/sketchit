import actions from 'constants/actionTypes';
import axios from 'axios';

const authenticationSuccess = () => ({
  type: actions.AUTH_SUCCESS,
});

const authenticationFailure = () => ({
  type: actions.AUTH_FAILED,
});

const authenticate = reqObj => (dispatch) => {
  axios.post('http://localhost:5000/authenticate', reqObj, { headers: { 'Access-Control-Allow-Origin': '*' } })
    .then((response) => {
      if (response.data.statusCode === 200) {
        dispatch(authenticationSuccess());
      } else {
        dispatch(authenticationFailure());
      }
    })
    .catch(() => {
      dispatch(authenticationFailure());
    });
};

export default {
  authenticationSuccess,
  authenticationFailure,
  authenticate,
};
