import React from "react";
import { Link } from "react-router-dom";

function Colors({ colors }) {
    const colorLinks = Object.keys(colors).map(color => (
        <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
        </li>
    ))
    return (
        <div>
            <h1>List of Colors!</h1>
            <ul>
                {colorLinks}
            </ul>
            <Link to={"/colors/new"}>Add a new color!</Link>
        </div>
    )
}

export default Colors;