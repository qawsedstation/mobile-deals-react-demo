/* eslint-disable no-constant-condition */
/* eslint-disable brace-style */
/* eslint-disable no-use-before-define */

import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, select, take, cancel, fork } from 'redux-saga/effects';

import {
DEALS_FILTER_GET_DEALS_REQUEST,
} from './constants';

import * as actions from './actions';

import getMobileDeals from 'redux/services/getMobileDeals';

export function* combinedSagas() {

  yield fork(
takeLatest,
DEALS_FILTER_GET_DEALS_REQUEST,
handleGetMobileDeals
);
}

/*
handleGetMobileDeals
*/

export function* handleGetMobileDeals(action) {
  yield put(actions.getMobileDealsLoading());


  try {
    const response = yield call(
      getMobileDeals,
      action.minutes,
      action.text,
      action.data,
    );


    yield put(actions.getMobileDealsSuccess(response.data.result));
  } catch (error) {
    console.log(error);
    yield put(actions.getMobileDealsFailure(error));
  }
}
