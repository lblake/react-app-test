import { tradersReducer, initialState } from "./reducers";
import { fetchTraders, fetchTradersSuccess } from "./actions";
import { ITrader } from "./types";

describe("traders reducer", () => {
  // it("should return initial state", () => {
  // 	expect(
  // 		tradersReducer(initialState, { type: "no type", payload: null })
  // 	).toEqual(initialState);
  // });

  it("should handle fetching all posts", () => {
    expect(tradersReducer(initialState, fetchTraders())).toEqual({
      ...initialState,
      loading: true
    });
  });
  it("should handle all data successfully fetch post", () => {
    const data: ITrader[] = [];
    expect(tradersReducer(initialState, fetchTradersSuccess(data))).toEqual({
      ...initialState,
      data
    });
  });
});
