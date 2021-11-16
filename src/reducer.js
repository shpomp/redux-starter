//import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import * as actions from "./actionTypes";

let lastId = 0;

export const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.BUG_ADDED:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false,
				},
			];
		case actions.BUG_REMOVED:
			return state.filter((bug) => {
				console.log(bug);
				console.log(action.payload.id);
				bug.id !== action.payload.id;
			});
		default: {
			const def = () => {
				console.log("reducer defaulted!");
			};
			def();
			return state;
		}
	}
};

// pure function - free of side effects.
// calling it multiple times with the same parameter gives the same output
