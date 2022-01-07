import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFromLocal } from "../../Redux/todoReducer/action";

export const TodoItem = ({ title, status, id }) => {
  const dispatch = useDispatch();

  const fetchTodos = () => {
    return axios.get(`http://localhost:3000/todos`);
  };

  const getTodo = async () => {
    const myData = await fetchTodos().then((res) => res.data);
    const requestAction = fetchFromLocal(myData);
    dispatch(requestAction);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    getTodo();
  };

  return (
    <div
      style={{
        border: "2px solid tomato",
        width: "450px",
        margin: "auto",
        borderRadius: "10px"
      }}
    >
      <h3>
        Title: {title} Status: {`${status}`}
        {/* <button>Toggle</button> */}
        <button onClick={handleDelete}>Delete</button>
      </h3>
    </div>
  );
};
