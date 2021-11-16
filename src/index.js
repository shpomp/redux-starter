import store from "./store";

const unsubscibe = store.subscribe(() => {
	console.log("store changed!", store.getState());
});

store.dispatch({ type: "bugAdded", payload: { description: "Bug1" } });
store.dispatch({ type: "bugAdded", payload: { description: "Bug2" } });
store.dispatch({ type: "bugAdded", payload: { description: "Bug3" } });

console.log(store.getState());

store.dispatch({ type: "bugRemoved", payload: { id: 2 } });

console.log(store.getState());
