import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/logo.svg'
import React from 'react'

export default function () {
    return (
        <div>
        <Navbar className='bg-light'collapseOnSelect expand="lg" bg="white" variant="light">
          <Navbar.Brand href="/"><img
        alt=""
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
      /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <br/>
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/overview">Overview</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        </div>
    )
}
