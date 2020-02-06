import { Action } from 'redux'
import { takeLatest, call, put, CallEffect, PutEffect, ForkEffect } from 'redux-saga/effects'

import { fetchTradersApiCall } from 'src/api'
import { fetchTradersAction } from 'src/store/ducks/traders/actions'
import { ITrader } from 'src/api/traders'

function* fetchTraders(): Generator<CallEffect | PutEffect<Action>> {
  try {
    yield put(fetchTradersAction.setLoading())
    const traders = yield call(fetchTradersApiCall)
    yield put(fetchTradersAction.setSuccess(traders as ITrader[]))
  } catch (err) {
    yield put(fetchTradersAction.setError({ error: 'error in fetch traders' }))
  }
}

export default function* listeners(): IterableIterator<ForkEffect> {
  yield takeLatest(fetchTradersAction.type, fetchTraders)
}
