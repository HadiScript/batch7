// import { useState, useEffect } from 'react'

import { useState } from "react"
import Mouse from "./Mouse"

const App = () => {

  // const [count, setCount] = useState(0)
  // const [count2, setcount2] = useState(100)

  // useEffect( func, dep in arr **optional  )

  // useEffect(() => {
  //   console.log("in useEffect")
  //   // first time call just
  //   // api call to fetch some data
  // }, [])
  // [] empty dep

  // useEffect(() => {
  //   console.log("updating count 2")
  //   // first call and count 2 update
  // }, [count2])


  const [showChild, setShowChild] = useState(false)

  return (
    <>
      <h1>Parent Component</h1>
      <button onClick={() => setShowChild(!showChild)}>Show Child</button>

      {showChild && <Mouse />}

      {/* <div>
        Count : {count}
        <br />
        <button onClick={() => setCount(count + 1)} > Inc </button>
      </div>


      <div>
        Count : {count2}
        <br />
        <button onClick={() => setcount2(count2 + 100)} > Inc </button>
      </div> */}


    </>
  )
}

export default App