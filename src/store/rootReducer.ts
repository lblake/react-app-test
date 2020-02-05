import { combineReducers } from "redux";

import { tradersReducer } from "./ducks/traders/reducers";
import {ITradersState} from "./ducks/traders/types"

export interface IStoreState {
  traders: ITradersState;
}

export const rootReducer = combineReducers<IStoreState>({
  traders: tradersReducer
});
