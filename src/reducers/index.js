import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signupReducer from './signup';
import usernameReducer from './username';
import marketsReducer from './markets';
import clientReducer from './client';
import tradeReducer from './trade';
import openPositionsReducer from './openPositions';

const rootReducer = combineReducers({
  trade: tradeReducer,
  openPositions: openPositionsReducer,
  markets: marketsReducer,
  signup: signupReducer,
  client: clientReducer,
  username: usernameReducer,
  routing: routerReducer
});

export default rootReducer;
