import React from 'react'
import { users } from './data'
import { Link } from 'react-router-dom'


const Users = () => {
  return (
    <div>
      {
        users.map(x => <div key={x.id} className='border p-3 m-3 rounded-3'>
          name: {x.name} - age : {x.age} - status : {x.status}
          <Link to={`/user/${x.id}`} >detail</Link>
        </div>)
      }
    </div >
  )
}

export default Users