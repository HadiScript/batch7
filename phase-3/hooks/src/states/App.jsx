import React, { createContext, useState } from 'react'
import A from './child/A'
import B from './child/B'
import C from './child/C'


export const MoneyContext = createContext();
export const PropContext = createContext();


const App = () => {
  const [pasia, setPaisa] = useState(100);
  const [properties, setProperties] = useState(10);

  return (
    <div>
      <h1>Parent Component</h1>

      <MoneyContext.Provider value={[pasia, setPaisa]}>

        <PropContext.Provider value={[properties, setProperties]}>
          <br />
          <A />
        </PropContext.Provider>

        <br />
        <B />

        <br />
        <C />

      </MoneyContext.Provider>



    </div>
  )
}

export default App