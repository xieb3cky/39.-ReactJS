import React from "react";

function Box({ id, removeBox, width = 5, height = 5, backgroundColor = "pink" }) {
    const remove = () => {
        removeBox(id);
    }
    return (
        <div>
            <div
                style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor: backgroundColor
                }}>
            </div>
            <button onClick={remove}>Remove</button>
        </div >
    );
}



export default Box;