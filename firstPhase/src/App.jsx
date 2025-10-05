import React, { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {

  const [counter, setCounter] = useState(5)

  const addValue = () => {
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
    }

  const removeValue = () => {
    if (counter > -5) {
      setCounter(counter -1)
    }
  }

  return (
    <>
      <h1>My Counter App</h1>
      <h2>Counter value : {} </h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
