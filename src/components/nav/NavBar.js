
import logo from '../img/logo.jpg'
import {Button} from 'reactstrap'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      
        <NavbarBrand href="/"><img
        src={logo}
        width="200"
        height="100"
        className="d-inline-block align-top"
        alt="Kyzen Logo"
      /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/dataList/">Data List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/enterData/">Enter Data</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/createNewData/">Create New Data</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logNewData/">Log New Data</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
          <Button  color="primary" onClick={() => {

localStorage.clear();
props.history.push("/login")

}

}>Log Out</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}