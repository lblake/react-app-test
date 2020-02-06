import tradersReducer, { initialState } from './reducers'
import { fetchTradersAction } from './actions'
import { ITrader } from 'src/api/traders'

describe('traders reducer', () => {
  // it("should return initial state", () => {
  // 	expect(
  // 		tradersReducer(initialState, { type: "no type", payload: null })
  // 	).toEqual(initialState);
  // });

  it('should handle fetching all posts', () => {
    expect(tradersReducer(initialState, fetchTradersAction.setLoading())).toEqual({
      ...initialState,
      loading: true,
    })
  })
  it('should handle all data successfully fetch post', () => {
    const data: ITrader[] = []
    expect(tradersReducer(initialState, fetchTradersAction.setSuccess(data))).toEqual({
      ...initialState,
      data,
    })
  })
})
