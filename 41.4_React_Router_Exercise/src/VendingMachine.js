/**Shows a page with a list of snacks that you can get from the vending machine */
import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
    return (
        <div>

            <div className="Selection">
                <h4>I'M HUNGRY, SELECT A SNACK</h4>
                <h1><Link to="/soda">Soda</Link></h1>
                <h1><Link to="/chips">Chips</Link></h1>
                <h1><Link to="/cookies">Cookies</Link></h1>
            </div>
            <img
                className="VendingMachine"
                src="https://img.freepik.com/free-vector/vending-machines-snacks-set-chips-bars-canned-drinks-automate-with-empty-shelves_74855-14559.jpg?w=1380&t=st=1665776813~exp=1665777413~hmac=ad3a0be661e353a5bebeb849ba0004a344def273e5fc8b0e68b8215ce0bdbd04"
                alt="Vending Machine"
            />

        </div >
    );
}

export default VendingMachine;
