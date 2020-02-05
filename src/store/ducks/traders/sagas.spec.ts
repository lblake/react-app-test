import {fetchTraders} from "./actions"

describe("traders saga", () => {
	it("should handle successfully fetching traders", () => {
		return (
            const tradersData ={}
            
			expectSaga(tradersData)
				.provide([[matchers.call.fn(apiCaller), tradersData]])
				// Assert that the 'put' will eventually happen
				.put(fetchPostsSuccess(tradersData))
				// Dispatch any actions that the saga will 'take'
				.dispatch(fetchTraders())
				// Start the test, return a Promise
				.run()
		);
	});
});