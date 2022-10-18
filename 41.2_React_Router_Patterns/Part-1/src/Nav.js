import React from "react"
import { NavLink } from "react-router-dom"

function Nav({ dogs }) {
    const dogLinks = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name}`}>
            {dog.name}
        </NavLink>
    ))
    return (
        <nav>
            <NavLink to="/dogs">Home</NavLink>
            {dogLinks}
        </nav>
    )
};

export default Nav;