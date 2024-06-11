import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>count :{count} </h2>
      <button onClick={incCount}>Increase Count</button>
      <p>{count}</p>
    </div>
  );
}
