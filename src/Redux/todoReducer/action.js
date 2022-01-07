// export const getTodosSuccess = () => {};
// export const getTodosFailure = () => {};

import { FETCHING_TODO } from "./actionTypes2";

export const fetchFromLocal = (fetchedTodos) => ({
  type: FETCHING_TODO,
  payload: fetchedTodos
});
