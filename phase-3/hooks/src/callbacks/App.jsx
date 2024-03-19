import React, { useCallback, useState } from 'react'

const AppSet = new Set()
const App = () => {

  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(10)

  // useCallback( func, [] )

  const IncA = useCallback(() => setCountA(100), [countA]) // 10B
  const IncB = useCallback(() => setCountB(0), [countB]) // 105050M

  AppSet.add(IncA)
  AppSet.add(IncB)

  console.log(AppSet)


  return (
    <div>

      valueA : {countA}
      valueB : {countB}
      <br />
      <button onClick={IncA}>IncA</button>
      <button onClick={IncB}>IncB</button>
    </div>
  )
}

export default App