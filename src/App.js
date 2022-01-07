import { useSelector } from "react-redux";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo/Todo";
import "./styles.css";
export default function App() {
  const count = useSelector((state) => state.counter.counterValue);
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <Counter />
      <hr />
      <Todo />
    </div>
  );
}
