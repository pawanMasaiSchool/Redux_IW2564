import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";
import { todoReducer } from "./todoReducer/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
});

export const store = createStore(rootReducer);

// store.subscribe(() => console.log(store.getState()));
