import React from 'react';
import { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const result = useRef(0)
  console.log("useState count: ", count)

  const handleCount = () => {
    result.current += 1;
    console.log("useRef count:", result.current)
  }


  return (
    <div>
    <div>
      <h2>useState count (controlled): render everytime we increase count</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          increase count {count}
        </button>
      </div>
    </div>
    
    <div>
      <h2>useRef count (uncontrolled): dont render but still increases the count</h2>
      <div>
        <button onClick={handleCount}>
          increase count {result.current}
        </button>
      </div>
    </div>
    </div>
  )
}

export default App
