import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className='d-flex gap-4'>
      <Link className={`${pathname === '/' && 'text-dark'}`} to={'/'}>Home</Link>
      <Link className={`${pathname === '/users' && 'text-dark'}`} to={'/users'}>Users</Link>
    </div>
  )
}

export default Header