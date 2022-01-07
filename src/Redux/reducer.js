import { HANDLE_COUNTER_CHANGE } from "./actionTypes";

const startingState = {
  counterValue: 0
};

const counterReducer = (currenetState = startingState, { type, payload }) => {
  switch (type) {
    case HANDLE_COUNTER_CHANGE: {
      return {
        counterValue: Number(currenetState.counterValue) + Number(payload)
      };
    }

    // case DECREMENT_COUNTER: {
    //   return {
    //     counterValue: Number(currenetState.counterValue) - Number(payload)
    //   };
    // }

    default: {
      return currenetState;
    }
  }
};

export default counterReducer;
