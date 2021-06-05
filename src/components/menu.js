import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

export const Menu = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      collapseOnSelect=""
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/#top">
          <img src="/images/welsh_dragon-simple.svg" alt="Welsh Dragon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/#contact">Join</Nav.Link>
            <Nav.Link href="/walks">Walks</Nav.Link>
            <Nav.Link href="/#gallery">Gallery</Nav.Link>
            <Nav.Link href="/#faq">FAQs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
