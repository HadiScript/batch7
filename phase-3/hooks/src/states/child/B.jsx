import React, { useContext } from 'react'
import { MoneyContext } from '../App'

const B = () => {
  const [pasia, setPaisa] = useContext(MoneyContext)
  return (
    <div>B</div>
  )
}

export default B