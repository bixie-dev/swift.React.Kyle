import React, { useContext, useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';

import { HeaderProps } from "./types";

import Logo from "../../Assets/logo.png"

export const Header: React.FC<HeaderProps> = (): JSX.Element => {

  return (
    <Navbar className="Header px-1 border-bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="flex" href="#home">
          <Image src={Logo} width={60} height={60} />
          <strong className="Header_logo-text">Swift</strong>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="Header_menu justify-content-end">
          <Nav.Link className="Header_navlink" href="#">About us</Nav.Link>
          <Nav.Link className="Header_navlink" href="#">How to start</Nav.Link>
          <Nav.Link className="Header_navlink" href="#">Purchase</Nav.Link>
          <Nav.Link className="Header_navlink" href="#">Dashboard</Nav.Link>
          <Nav.Link className="Header_navlink download px-4 py-3" href="#">Download</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
