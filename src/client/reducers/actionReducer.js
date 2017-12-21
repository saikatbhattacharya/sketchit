import actions from 'constants/actionTypes';

const defaultState = {
  isAuthenticated: -1,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.AUTH_SUCCESS:
      return { ...state, isAuthenticated: 1 };
    case actions.AUTH_FAILED:
      return { ...state, isAuthenticated: 0 };
    default:
      return { ...state };
  }
};

export default reducer;
