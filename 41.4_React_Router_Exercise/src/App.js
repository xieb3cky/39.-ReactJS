/**Shows a page with a list of snacks that you can get from the vending machine */
import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine"
import Soda from "./Soda";
import Chips from "./Chips";
import Cookies from "./Cookies";





function App() {
  return (
    <div className="VenMachine">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VendingMachine />}>
          </Route>
          <Route exact path="/soda" element={<Soda />}>
          </Route>
          <Route exact path="/chips" element={<Chips />}>
          </Route>
          <Route exact path="/cookies" element={<Cookies />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;