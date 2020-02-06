import { ITrader } from 'src/api/traders'
import { fetchTradersAction } from './actions'

export interface ITradersState {
  traders: ITrader[]
  error: string
  isLoading: boolean
}

export const initialState: ITradersState = {
  traders: [],
  error: '',
  isLoading: false,
}

interface ErrorData {
  error: string
}

const tradersReducer = (
  state: ITradersState = initialState,
  action: {
    type: string
    payload?: ITrader[] | ErrorData
  }
): ITradersState => {
  switch (action.type) {
    case fetchTradersAction.loadingType:
      return { ...state, isLoading: true }
    case fetchTradersAction.successType: {
      return { ...initialState, traders: action.payload as ITrader[] }
    }
    case fetchTradersAction.errorType: {
      const { error } = action.payload as ErrorData
      return {
        ...state,
        error,
      }
    }
    default:
      return state
  }
}

export default tradersReducer
