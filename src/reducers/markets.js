import {
  GET_MARKETS_REQUEST,
  GET_MARKETS_SUCCESS,
  GET_MARKETS_FAILURE,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {

    case GET_MARKETS_REQUEST:
      return {
        ...state,
        readyToRenderMarkets: false
      };

    case GET_MARKETS_SUCCESS:
      return {
        ...state,
        readyToRenderMarkets: true,
        markets: action.payload
      };

    case GET_MARKETS_FAILURE:
      return {
        ...state,
        readyToRenderMarkets: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
}
