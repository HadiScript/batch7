import { useEffect, useState } from 'react'

const useMyStates = () => {


  const [data, setData] = useState(0)
  const Inc = () => setData(data + 100)
  const Dec = () => setData(data - 100)

  useEffect(() => { console.log("fetching some data") }, [])
  useEffect(() => { console.log("udpate state ") }, [data])



  return { data, Inc, Dec }
}

export default useMyStates