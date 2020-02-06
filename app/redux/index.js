import { combineReducers } from 'redux-immutablejs';

import routerReducer from './modules/ImmutableRouterReducer';
import DealsFilter from './modules/MobileDeals/DealsFilter/reducer';
import DealsProductNameFilter from './modules/MobileDeals/DealsProductNameFilter/reducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  DealsFilter,
  DealsProductNameFilter,
});

export default rootReducer;
