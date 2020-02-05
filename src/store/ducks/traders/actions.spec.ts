import {ActionTypes} from "./types"
import { fetchTraders, fetchTradersSuccess} from "./actions"

describe("traders actions", () => {
	it("should create an action to fetch all posts", () => {
		const expectedAction = action(ActionTypes.FETCH_TRADERS, [], {
			method: "get",
			route: "/users"
		});

		expect(fetchTraders()).toEqual(expectedAction);
	});

	it("should create an success action", () => {
		const expectedAction = action(
			ActionTypes.FETCH_TRADERS_SUCCESS,
			postData
		);

		expect(fetchTradersSuccess(postData)).toEqual(expectedAction);
	});
});