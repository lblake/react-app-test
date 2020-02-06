import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TradersList } from './TradersList/TradersList'
import { ITrader } from 'src/api/traders'
import { fetchTradersAction } from 'src/store/ducks/traders/actions'
import { IStoreState } from 'src/store/rootReducer'

const TradersContainer: React.FC = () => {
  const dispatch = useDispatch()
  const traders = useSelector<IStoreState, ITrader[]>(state => state.tradersReducer.traders)

  const fetchTraders = useCallback(() => {
    dispatch(fetchTradersAction.start(null))
  }, [dispatch])

  useEffect(() => {
    fetchTraders()
  }, [fetchTraders])

  return <TradersList traders={traders} />
}

export default TradersContainer
