import React, { useState } from 'react'


const App = () => {
  const [itemsInPersonCart, setItemsInPersonCart] = useState(0)
  const [lines, setLines] = useState([
    [10, 5, 2], [1], [2], [3], [4]
  ])

  const addPersonToLine = (e) => {
    e.preventDefault()
    let leastItemsAmount = 1e9;
    let lineWithLeast
    for (let line of lines) {
      const totalInLine = line.reduce((sum,value) => sum + value, 0)
      if (totalInLine < leastItemsAmount) {
        leastItemsAmount = totalInLine
        lineWithLeast = line
      }
    }
  }



  return (
    <main className="App">
      <form onSubmit={addPersonToLine}>
        <input
        required
        type="number"
        value={itemsInPersonCart}
        onChange={(e) => setItemsInPersonCart(e.currentTarget.valueAsNumber)}
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
