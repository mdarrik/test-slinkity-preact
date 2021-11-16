import { useState } from 'preact/hooks'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You've had {count} glasses of water 💧</p>

      <button onClick={() => setCount(count + 1)}>
        Add one
      </button>
    </div>
  )
}

export default Counter