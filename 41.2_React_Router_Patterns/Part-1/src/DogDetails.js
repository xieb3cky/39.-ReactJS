import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

function DogDetails({ dogs }) {
    const { name } = useParams();
    const currDog = dogs.find(dog => dog.name === name);
    if (!currDog) {
        return <Navigate to="/dogs" />
    } else {
        return (
            <div>
                <h1>
                    {currDog.name}
                </h1>
                <img src={currDog.src} alt={currDog.name} />
                <h2>{currDog.age} years old</h2>
                <ul>
                    {currDog.facts.map((fact, idx) => (
                        <li key={idx}>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Return</Link>
            </div>
        )
    }
}

export default DogDetails;