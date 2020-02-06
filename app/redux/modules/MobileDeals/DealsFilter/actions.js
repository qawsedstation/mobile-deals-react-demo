/* eslint-disable max-len */

import {
DEALS_FILTER_GET_DEALS_REQUEST,
DEALS_FILTER_GET_DEALS_LOADING,
DEALS_FILTER_GET_DEALS_SUCCESS,
DEALS_FILTER_GET_DEALS_FAILURE,
DEALS_FILTER_SETUP_MINUTES_FILTER,
DEALS_FILTER_SETUP_TEXTS_FILTER,
DEALS_FILTER_SETUP_DATA_FILTER,
} from './constants';

/**
* GET DEALS
*/

export const setMinutesFilter = (minutesFilter) => {
  return {
    type: DEALS_FILTER_SETUP_MINUTES_FILTER,
    minutesFilter,
  };
};

export const setTextsFilter = (textsFilter) => {
  return {
    type: DEALS_FILTER_SETUP_TEXTS_FILTER,
    textsFilter,
  };
};

export const setDataFilter = (dataFilter) => {
  return {
    type: DEALS_FILTER_SETUP_DATA_FILTER,
    dataFilter,
  };
};

export const getMobileDealsRequest = (minutes, text, data) => {
  return {
    type: DEALS_FILTER_GET_DEALS_REQUEST,
    minutes,
    text,
    data,
  };
};

export const getMobileDealsLoading = () => ({
  type: DEALS_FILTER_GET_DEALS_LOADING,
});

export const getMobileDealsSuccess = (data) => ({
  type: DEALS_FILTER_GET_DEALS_SUCCESS,
  data,
});

export const getMobileDealsFailure = (error) => ({
  type: DEALS_FILTER_GET_DEALS_FAILURE,
  error,
});
