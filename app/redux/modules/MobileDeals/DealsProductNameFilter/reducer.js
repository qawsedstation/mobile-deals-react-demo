/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */

import Immutable from 'immutable';

import {
DEALS_PRODUCT_NAME_FILTER,
} from './constants';


const initialState = Immutable.fromJS({
  dealsProductName: '',
});

/*
REDUCER FUNCTIONS
*/

export default function (state = initialState, action) {
  switch (action.type) {
    case DEALS_PRODUCT_NAME_FILTER:
      return state.mergeDeep({
        dealsProductName: action.dealsProductName,
      });

    default:
      return state;
  }
}
