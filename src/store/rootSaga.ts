import { all, fork } from "redux-saga/effects";
import { tradersSaga } from "./ducks/traders/sagas";

export function* rootSaga() {
  yield all([fork(tradersSaga)]);
}
