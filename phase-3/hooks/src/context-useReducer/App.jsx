import React from 'react'
import { useMyContext } from './context/StateContext'

const App = () => {

  const [state, dispatch] = useMyContext();
  return (
    <div>
      value: {state}

      <button onClick={() => dispatch('IncBy5')} >Inc by 5</button>
      <button>Dec by 5</button>

      <button>Inc by 10</button>
      <button>Dec by 10</button>

      <button>Inc by 15</button>
      <button onClick={() => dispatch('Decby15')}>Dec by 15</button>


    </div>
  )
}

export default App