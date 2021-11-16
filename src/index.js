import store from "./store";
import * as actions from "./actionTypes";

const unsubscibe = store.subscribe(() => {
	console.log("store changed!", store.getState());
});

store.dispatch({ type: actions.BUG_ADDED, payload: { description: "Bug1" } });
store.dispatch({ type: actions.BUG_ADDED, payload: { description: "Bug2" } });
store.dispatch({ type: actions.BUG_ADDED, payload: { description: "Bug3" } });

console.log(store.getState());

store.dispatch({ type: actions.BUG_REMOVED, payload: { id: 2 } });

console.log(store.getState());
