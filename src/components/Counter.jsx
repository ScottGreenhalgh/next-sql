"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>+1</button>
      <p>{`Count: ${count}`}</p>
    </div>
  );
}
