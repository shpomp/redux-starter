import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

const unsubscibe = store.subscribe(() => {
	console.log("store changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));

console.log(store.getState());

store.dispatch(bugRemoved(2));

console.log(store.getState());
