import { combineReducers } from 'redux'

import tradersReducer, { ITradersState } from './ducks/traders/reducers'

export interface IStoreState {
  tradersReducer: ITradersState
}

export const rootReducer = combineReducers<IStoreState>({
  tradersReducer,
})
