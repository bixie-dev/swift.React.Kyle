import React, { useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { HeaderProps } from "./types";

import Logo from "../../Assets/logo.png"

export const Header: React.FC<HeaderProps> = (): JSX.Element => {

  const navigate: NavigateFunction = useNavigate()

  return (
    // <Navbar className="Header px-1 border-bottom" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand className="flex" onClick={() => navigate("/")}>
    //       <Image src={Logo} width={60} height={60} />
    //       <strong className="Header_logo-text">Swift</strong>
    //     </Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="Header_menu justify-content-end">
          // <Nav.Link className="Header_navlink" onClick={() => navigate("/about")}>About us</Nav.Link>
          // <Nav.Link className="Header_navlink" onClick={() => navigate("/how_to_start")}>How to start</Nav.Link>
          // <Nav.Link className="Header_navlink">Purchase</Nav.Link>
          // <Nav.Link className="Header_navlink" onClick={() => navigate("/")}>Dashboard</Nav.Link>
          // <Nav.Link className="Header_navlink download px-4 py-3" onClick={() => navigate("/download")}>Download</Nav.Link>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar className="Header px-1 border-bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="flex" onClick={() => navigate("/")}>
          <Image src={Logo} width={60} height={60} />
          <strong className="Header_logo-text">Swift</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="px-5 Header_menu">
            <Nav.Link className="Header_navlink" onClick={() => navigate("/about")}>About us</Nav.Link>
            <Nav.Link className="Header_navlink" onClick={() => navigate("/how_to_start")}>How to start</Nav.Link>
            <Nav.Link className="Header_navlink">Purchase</Nav.Link>
            <Nav.Link className="Header_navlink" onClick={() => navigate("/")}>Dashboard</Nav.Link>
            <Nav.Link className="Header_navlink download px-4 py-2" onClick={() => navigate("/download")}>Download</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
