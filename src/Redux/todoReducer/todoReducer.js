import { ADD_TODO, FETCHING_TODO } from "./actionTypes2";

const initState = {
  todos: []
};

const todoReducer = (currentState = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        todos: [
          ...currentState.todos,
          { id: payload.id, title: payload.title, status: payload.status }
        ]
      };
    }
    case FETCHING_TODO: {
      return { todos: [...payload] };
    }

    default: {
      return currentState;
    }
  }
};

export { todoReducer };
