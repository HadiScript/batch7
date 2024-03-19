import React from 'react'
import StateContext from './context/StateContext'
import A from './child/A'

const App = () => {
  return (
    <StateContext>


      <A />

      
    </StateContext>
  )
}

export default App