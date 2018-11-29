import {
  GET_OPEN_POSITIONS_FAILURE,
  GET_OPEN_POSITIONS_SUCCESS,
  GET_OPEN_POSITIONS_REQUEST
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {

    case GET_OPEN_POSITIONS_REQUEST:
      state = {
        ...state,
        isLoading: true,
        errorMessage: undefined
      };
      break;

    case GET_OPEN_POSITIONS_SUCCESS:
      state = {
        ...state,
        isLoading: false,
        positions: action.payload,
        errorMessage: undefined
      };
      break;

    case GET_OPEN_POSITIONS_FAILURE:
      state = {
        ...state,
        isLoading: false,
        positions: [],
        errorMessage: action.payload
      };
      break;

    default:
  }

  // Position need to be in pence, server sends us pounds!
  if (state.positions) {
    state.positions.forEach((position) => {
      position.profitAndLoss = position.profitAndLoss * 100;
    });
  }

  return state;
}
