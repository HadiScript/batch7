import React, { useEffect, useState } from 'react'

const Mouse = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })


  const gettingMouseValues = e => {
    const { clientX, clientY } = e;
    console.log(clientX)
    setCoordinates({ x: clientX, y: clientY })
  }


  useEffect(() => {

    window.addEventListener('mousemove', gettingMouseValues)



    return () => {
      window.removeEventListener('mousemove', gettingMouseValues)
    }

  }, [coordinates])



  return (
    <div>Child Mouse Component
      <br />
      x: {coordinates.x}
      y: {coordinates.y}
    </div>
  )
}

export default Mouse