export enum ActionTypes {
  FETCH_TRADERS = "FETCH_TRADERS",
  FETCH_TRADERS_SUCCESS = "FETCH_TRADERS_SUCCESS",
  FETCH_TRADERS_ERROR = "FETCH_TRADERS_ERROR"
}

export interface ITrader {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

export interface ITradersState {
  data: ITrader[];
  errors: string[];
  loading: boolean;
}

export interface IFetchTradersAction {
  type: ActionTypes.FETCH_TRADERS;
}

export interface IFetchTradersSuccessAction {
  type: ActionTypes.FETCH_TRADERS_SUCCESS;
  payload: ITrader[];
}

export interface IFetchTradersErorrAction {
  type: ActionTypes.FETCH_TRADERS_ERROR;
  payload: string[];
}

export type Action =
  | IFetchTradersAction
  | IFetchTradersSuccessAction
  | IFetchTradersErorrAction;
