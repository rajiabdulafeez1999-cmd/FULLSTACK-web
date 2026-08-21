import { useEffect, useState } from "react";

function Count() {
  const [Count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Pressed ${Count} times`;
  }, [Count]);
  useEffect(() => {
    return Count < 0 ? setCount(0) : undefined;
  }, [Count]);
  //Count = 0

  //useState syntax
  //const [state, setState]=useState(initialState)
  //  state = initialState

  return (
    <div>
      <h1 style={{ fontSize: "20px", color: "blue" }}>Count: {Count}</h1>
      <button onClick={() => setCount(Count + 1)}>add</button>
      <button onClick={() => setCount(Count - 1)}>subt</button>
      <button onClick={() => setCount(Count / 2)}>div</button>
      <button onClick={() => setCount(Count === 0)}>Reset</button>
    </div>
  );
}

export default Count;
