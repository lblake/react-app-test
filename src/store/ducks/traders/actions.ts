import { ITrader } from 'src/api/traders'
import createAsyncAction from '../../createAsyncAction'

export const fetchTradersAction = createAsyncAction<null, ITrader[]>('FETCH_TRADERS')
