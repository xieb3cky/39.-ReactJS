import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function Color({ colors }) {
    let history = useHistory();

    const { color } = useParams();

    const hex = colors[color]

    if (!hex) {
        history.push("/colors");
    }
    return (
        <div style={{ backgroundColor: hex }}>
            <div>This is {color}.</div>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Color;