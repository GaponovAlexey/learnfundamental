import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount((pr) => pr + 1)}>+</button>
        <button onClick={() => setCount((pr) => (pr -= 1))}>-</button>
      </div>
    </div>
  )
}
