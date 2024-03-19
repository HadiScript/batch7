import React, { useState } from 'react'
import { Col, Offcanvas, Row } from 'react-bootstrap'
import NavLink from './NavLink'
import Header from './Header'

const Layout = ({ children, }) => {

  const [showSidebar, setShowSidebar] = useState(false)


  return (
    <>
      <div className='container-fluid'>
        <Row className='mainLayout '>
          <Col md={2} className='d-none d-md-block sidebar border-end px-3'>

            <div className='mt-4'>
              <div> <h5>HadiScript</h5> </div>
              <NavLink />

            </div>

          </Col>
          <Col md={10} className='content px-3' >
            <Header setShowSidebar={setShowSidebar} />

            {children} -
          </Col>
        </Row>


        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} responsive="lg">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavLink from={"smallScreen"} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}

export default Layout