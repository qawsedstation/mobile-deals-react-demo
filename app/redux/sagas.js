/* eslint-disable no-duplicate-imports */

import { fork } from 'redux-saga/effects';

import { combinedSagas as combinedDealsFilter } from './modules/MobileDeals/DealsFilter/saga';


// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    combinedDealsFilter(),
  ];
}
