import React, { useContext } from 'react'
import { MoneyContext } from '../App'
import { useMyContext } from '../context/StateContext'

const A = () => {
  const [my, setmy] = useMyContext();
  // const [pasia, setPaisa] = useContext(MoneyContext)
  return (
    <>
      value: {my}
      <button onClick={() => setmy(my + 100)}>Inc</button>
      {/* // <div>A - money : {pasia} <button onClick={() => setPaisa(pasia + 100)}>update pasia</button></div> */}
    </>
  )
}

export default A