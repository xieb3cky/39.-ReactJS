/**The navbar should add a new link, “Drinks”, 
 * leading to a page listing the drinks — 
 * just like the “Snacks” link leads to a page listing food items.
**/

import React from 'react';
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


function NavBar() {
    return (
        <div>
            <Navbar expand="md">
                <NavLink to="/" className="navbar-brand">
                    Snack or Booze
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/snacks">Snacks</NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/drinks">Drinks</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/newItem">New Item</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;