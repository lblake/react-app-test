import { all, fork } from 'redux-saga/effects'
import traderListeners from './traders/sagas'

export function* rootSaga() {
  yield all([fork(traderListeners)])
}
