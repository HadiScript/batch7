import React, { createContext, useContext, useState } from 'react'


const MyStateContext = createContext();

export const useMyContext = () => useContext(MyStateContext)


const StateContext = ({ children }) => {
  const [my, setmy] = useState(0)
  return (
    <MyStateContext.Provider value={[my, setmy]}>
      {children}
    </MyStateContext.Provider>
  )
}

export default StateContext