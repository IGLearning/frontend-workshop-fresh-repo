import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:

    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_SUCCESS:

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signedIn: true
      };

    case LOGIN_FAILURE:

    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};
