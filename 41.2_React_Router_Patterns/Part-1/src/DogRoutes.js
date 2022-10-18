import React from "react";
import { Routes, Route } from 'react-router-dom';
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function DogRoutes({ dogs }) {

    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />}>
            </Route>
            <Route exact path="/dogs/:name" element={<DogDetails dogs={dogs} />}>
            </Route>
        </Routes>
    );
}

export default DogRoutes;