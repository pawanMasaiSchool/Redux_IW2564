import { HANDLE_COUNTER_CHANGE } from "./actionTypes";

const handleCounter = (amount) => ({
  type: HANDLE_COUNTER_CHANGE,
  payload: amount
});

export { handleCounter };
