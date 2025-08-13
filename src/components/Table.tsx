import { useState } from "react";

const Table = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <button className="shared-btn" onClick={() => setCount((s) => s + 1)}>
        Click me: {count}
      </button>
    </div>
  )
}

export default Table
