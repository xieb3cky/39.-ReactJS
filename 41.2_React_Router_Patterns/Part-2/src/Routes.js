import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Colors from "./Colors";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

function Routes() {
    const [colors, setColors] = useState({
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    })
    function addNewColor(newColor) {
        setColors(colors => ({ ...colors, ...newColor }));
    };


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <Colors colors={colors} />
                </Route>
                <Route exact path="/colors/new">
                    <NewColorForm addColor={addNewColor} />
                </Route>
                <Route path="/colors/:color" >
                    <Color colors={colors} />
                </Route>
                <Redirect to="/colors" />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
