import React, { useState } from 'react'


const App = () => {
  const [items, setItems] = useState(0)
  const [lines, setLines] = useState([
    [], [], [], [], []
  ])
  return (
    <main className="App">
      <form>
        <input
        required
        type="number"
        value={items}
        onChange={(e) => setItems(e.currentTarget.valueAsNumber)}
        ></input>
        <button>Checkout</button>
      </form>
      <div className="lines">
      {lines.map((people, idx) => (
        <div className="line" key={idx}>
          X
        </div>
      ))}
      </div>
    </main>
  )
}

export default App
