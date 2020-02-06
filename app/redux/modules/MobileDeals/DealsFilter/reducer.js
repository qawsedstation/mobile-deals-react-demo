/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */

import Immutable from 'immutable';

import {
DEALS_FILTER_GET_DEALS_SUCCESS,
DEALS_FILTER_SETUP_MINUTES_FILTER,
DEALS_FILTER_SETUP_TEXTS_FILTER,
DEALS_FILTER_SETUP_DATA_FILTER,
} from './constants';

const initialState = Immutable.fromJS({
  deals: [],
  minutesFilter: 500,
  textsFilter: 5000,
  dataFilter: 1024,
});

/*
REDUCER FUNCTIONS
*/

export default function (state = initialState, action) {
  switch (action.type) {

    case DEALS_FILTER_GET_DEALS_SUCCESS:
      return state.mergeDeep({
        deals: action.data.deals,
      });

    case DEALS_FILTER_SETUP_MINUTES_FILTER:
      return state.mergeDeep({
        minutesFilter: action.minutesFilter,
      });

    case DEALS_FILTER_SETUP_TEXTS_FILTER:
      return state.mergeDeep({
        textsFilter: action.textsFilter,
      });

    case DEALS_FILTER_SETUP_DATA_FILTER:
      return state.mergeDeep({
        dataFilter: action.dataFilter,
      });

    default:
      return state;
  }
}
