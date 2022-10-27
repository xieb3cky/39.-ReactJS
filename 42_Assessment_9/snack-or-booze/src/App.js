import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "./NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      < AppRoutes />
    </BrowserRouter>

  );
}

export default App;
