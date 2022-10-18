import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <div>
            <h1>
                List of Dogs!
            </h1>
            <div>
                {dogs.map(dog => (
                    <div key={dog.name}>
                        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default DogList;