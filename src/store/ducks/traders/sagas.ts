import { takeEvery, call, put, all, fork } from "redux-saga/effects";
import { fetchTradersApiCall } from "../../../api";
import { ActionTypes } from "./types";

import { fetchTradersSuccess, fetchTradersError } from "./actions";

function* tradersFetchWorker() {
  try {
    const traders = yield call(fetchTradersApiCall);
    yield put(fetchTradersSuccess(traders));
  } catch (err) {
    console.error("error in fetch traders", err);
    put(fetchTradersError("error in fetch traders"));
  }
}

export function* watchTradersFetch() {
  yield takeEvery(ActionTypes.FETCH_TRADERS, tradersFetchWorker);
}

export function* tradersSaga() {
	yield all([fork(watchTradersFetch)]);
}
