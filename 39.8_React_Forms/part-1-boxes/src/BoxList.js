import React, { useState } from 'react';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"


function BoxList() {

    const [boxes, setBoxes] = useState([]);

    //**Add new box to the list */
    const addBox = boxObj => {
        setBoxes([...boxes, boxObj]);
    };

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const renderBoxes = boxes.map(box =>
    (<Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        removeBox={removeBox}
        backgroundColor={box.backgroundColor}
    />));


    return (
        <div>
            <h1>Box List</h1>
            <NewBoxForm addBox={addBox} />
            {renderBoxes}

        </div>
    );
}



export default BoxList;

