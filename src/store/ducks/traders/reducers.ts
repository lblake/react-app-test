import {
  ActionTypes,
  Action,
  ITradersState
} from "./types";

export const initialState: ITradersState = {
  data: [],
  errors: [],
  loading: false
};

export const tradersReducer = (
  state: ITradersState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_TRADERS:
      return { ...state, loading: true };
    case ActionTypes.FETCH_TRADERS_SUCCESS: {
      return { ...initialState, data: action.payload };
    }
    case ActionTypes.FETCH_TRADERS_ERROR: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
