import axios from "axios";
import { useDispatch } from "react-redux";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import { fetchFromLocal } from "../../Redux/todoReducer/action";
import { useEffect } from "react";

function Todo() {
  const dispatch = useDispatch();

  const getTodo = async () => {
    const myData = await fetchTodos().then((res) => res.data);
    const requestAction = fetchFromLocal(myData);
    dispatch(requestAction);
  };

  const fetchTodos = () => {
    return axios.get(`http://localhost:3000/todos`);
  };

  const postingAxios = (task) => {
    return axios.post(`http://localhost:3000/todos`, task);
  };

  const handleAddTodo = async (title) => {
    const data = {
      title: title,
      status: false,
      id: uuid()
    };
    await postingAxios(data);
    getTodo();
  };

  // useEffect(() => {
  //   getTodo();
  // }, []);

  return (
    <div>
      <h1>TDO USING REDUX</h1>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList />
    </div>
  );
}

export default Todo;
