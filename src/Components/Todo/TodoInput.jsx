import { useState } from "react";

function TodoInput({ handleAddTodo }) {
  const [inp, setInp] = useState("");

  const handleChange = (e) => {
    setInp(e.target.value);
  };
  return (
    <div>
      <input value={inp} placeholder="add something" onChange={handleChange} />
      <button onClick={() => handleAddTodo(inp)}>ADD</button>
    </div>
  );
}

export default TodoInput;
