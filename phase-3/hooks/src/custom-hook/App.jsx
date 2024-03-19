import React, { useEffect, useState } from 'react'
import useMyStates from './useMyStates'

const App = () => {
  const { data, Inc, Dec } = useMyStates()

  return (
    <div>
      value :  {data}
      <br />
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Dec</button>
    </div>
  )
}

export default App