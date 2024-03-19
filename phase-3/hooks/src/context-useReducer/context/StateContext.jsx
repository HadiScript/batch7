import React, { createContext, useContext, useReducer } from 'react'

const MyContext = createContext();

const initValue = 100
const ReducerFunc = (state, action) => {
  if (action === 'IncBy5') {
    return state + 5
  } else if (action === "DecBy15") {
    return state - 15
  } else {
    return state;
  }
}


const StateContext = ({ children }) => {

  const [state, dispatch] = useReducer(ReducerFunc, initValue)



  return (
    <MyContext.Provider value={[state, dispatch]}>{children}</MyContext.Provider>
  )
}



export const useMyContext = () => useContext(MyContext);

export default StateContext