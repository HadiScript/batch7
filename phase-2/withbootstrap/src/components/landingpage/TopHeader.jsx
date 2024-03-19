import React from 'react'
import { Container } from 'react-bootstrap'
import { MdOutlineDashboard } from "react-icons/md";


const TopHeader = () => {
  return (
    <Container>
      <div className='topheader d-flex justify-content-between pb-2 pt-3 border-bottom'>
        <h5>Logo</h5>
        <div className='d-flex gap-2 align-items-center'><MdOutlineDashboard /> Dashboard</div>
      </div>
    </Container>
  )
}

export default TopHeader