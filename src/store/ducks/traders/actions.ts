import axios from "axios";

import { Dispatch } from "redux";

import {
  ActionTypes,
  ITrader,
  IFetchTradersAction,
  IFetchTradersSuccessAction,
  IFetchTradersErorrAction
} from "./types";

const url = `${process.env.REACT_APP_API_URL}/users`;

export const fetchTradersThunk = () => async (dispatch: Dispatch) => {
  dispatch<IFetchTradersAction>({ type: ActionTypes.FETCH_TRADERS });
  try {
    const response = await axios.get<ITrader[]>(url);
    dispatch<IFetchTradersSuccessAction>({
      type: ActionTypes.FETCH_TRADERS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch<IFetchTradersErorrAction>({
      type: ActionTypes.FETCH_TRADERS_ERROR,
      payload: [error]
    });
  }
};

export const fetchTraders = (): IFetchTradersAction => ({
  type: ActionTypes.FETCH_TRADERS
});

export const fetchTradersSuccess = (
  data: ITrader[]
): IFetchTradersSuccessAction => ({
  type: ActionTypes.FETCH_TRADERS_SUCCESS,
  payload: data
});

export const fetchTradersError = (error: string): IFetchTradersErorrAction => ({
  type: ActionTypes.FETCH_TRADERS_ERROR,
  payload: [error]
});
