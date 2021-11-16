let lastId = 0;

export const reducer = (state = [], action) => {
	switch (action.type) {
		case "bugAdded":
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false,
				},
			];
		case "bugRemoved":
			return state.filter((bug) => {
				console.log(bug);
				console.log(action.payload.id);
				bug.id !== action.payload.id;
			});
		default:
			return state;
	}
};

// pure function - free of side effects.
// calling it multiple times with the same parameter gives the same output
