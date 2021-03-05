// import React from "react"
// import { Link } from "react-router-dom"
// import "./NavBar.css"

// export const NavBar = (props) => {
//     return (
//         <ul className="navbar">
//             <li className="navbar__item active">
//                 <Link className="navbar__link" to="/">Kyzen</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/animals">Touch Screen</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/customers">Display</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/employees">Data</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/logout">Logout</Link>
//             </li>
//         </ul>
//     )
// }

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
        <NavbarBrand href="/">Kyzen</NavbarBrand>
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