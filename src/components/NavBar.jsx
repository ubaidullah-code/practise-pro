import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link style={{textDecoration: "none"}} to={"/"}><Navbar.Brand href="#home">Navbar</Navbar.Brand></Link>
          <Nav className="me-auto">
          <Link to={"/contact"} style={{textDecoration: "none"}}  ><Nav.Link href="#features" >Contact</Nav.Link></Link>
            <Link to={"/about"} style={{textDecoration: "none"}}  ><Nav.Link href="#features" >About</Nav.Link></Link>
            <Link to={"/detail"} style={{textDecoration: "none"}}  ><Nav.Link href="#features"  >More Details</Nav.Link></Link>
            <Link></Link>
          </Nav>
        </Container>
      </Navbar>
      
      
  </div>
  )
}

export default NavBar
