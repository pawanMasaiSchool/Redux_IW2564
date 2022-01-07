import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
        />
      ))}
    </div>
  );
}

export default TodoList;
