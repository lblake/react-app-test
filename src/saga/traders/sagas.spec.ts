import { fetchTradersAction } from '../../store/ducks/traders/actions'

describe('traders saga', () => {
  it('should handle successfully fetching traders', () => {
    const tradersData: ITrader[] = []
    return (
      expectSaga(tradersData)
        .provide([[matchers.call.fn(apiCaller), tradersData]])
        // Assert that the 'put' will eventually happen
        .put(fetchTradersAction.setSuccess(tradersData))
        // Dispatch any actions that the saga will 'take'
        .dispatch(fetchTradersAction.start(null))
        // Start the test, return a Promise
        .run()
    )
  })
})
