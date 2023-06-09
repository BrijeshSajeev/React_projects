import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
    </div>
  );
}
export default Counter;
