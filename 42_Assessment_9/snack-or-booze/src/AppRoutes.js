import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import Homepage from "./Homepage";
import NewItem from "./NewItem";
import NotFound404 from "./NotFound404";
import SnackOrBoozeApi from "./Api";



function AppRoutes() {

    const [snacksFood, setSnacks] = useState([]);
    const [drinksFood, setDrinks] = useState([]);
    const [newFood, setNewFood] = useState(false);

    async function getFood() {
        const snackRes = await SnackOrBoozeApi.getSnacks();
        setSnacks(snackRes);
        const drinksRes = await SnackOrBoozeApi.getDrinks();
        setDrinks(drinksRes);
    };


    //and new food
    async function newItem(item) {
        const res = await SnackOrBoozeApi.addNewItem(item);
        setNewFood(!newFood);
    }

    useEffect(() => {
        getFood();
    }, [newFood]);


    return (
        <Routes>
            <Route>
                <Route exact path="/" element={<Homepage snacks={snacksFood} drinks={drinksFood} />}></Route>
                <Route exact path="/drinks" element={<FoodMenu food={drinksFood} type={"drinks"} />}></Route>
                <Route exact path="/snacks" element={<FoodMenu food={snacksFood} type={"snacks"} />}></Route>
                <Route path="/:type/:id" element={<FoodItem snacks={snacksFood} drinks={drinksFood} />}></Route>
                <Route path="/newItem" element={<NewItem newItem={newItem} />}></Route>
                <Route path="*" element={<NotFound404 />}></Route>
            </Route>
        </Routes>
    )
}

// AppRoutes.defaultProps = { menu };

export default AppRoutes;
