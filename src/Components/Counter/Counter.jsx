import { useDispatch } from "react-redux";
import { handleCounter } from "../Redux/action";

function Counter() {
  const dispatch = useDispatch();

  const handleDispatch = (val) => {
    const action = handleCounter(val);
    dispatch(action);
  };

  return (
    <div>
      <button onClick={() => handleDispatch(1)}>ADD</button>
      <button onClick={() => handleDispatch(-1)}>REDUCE</button>
    </div>
  );
}

export default Counter;
