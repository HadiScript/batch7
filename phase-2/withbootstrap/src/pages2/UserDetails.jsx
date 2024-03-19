import React from 'react'
import { useParams } from 'react-router-dom'
import { users } from './data';

const UserDetails = () => {
  const { id } = useParams();

  let user = users.find(x => x.id == parseInt(id))

  if(!user){
    return <h1>This user is not exist</h1>
  }

  return (
    <div className='border p-3 m-3 rounded-3'>
      name: {user.name} - age : {user.age} - status : {user.status}

    </div>
  )
}

export default UserDetails