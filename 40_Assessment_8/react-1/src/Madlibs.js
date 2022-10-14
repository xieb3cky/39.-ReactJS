import React, { useState } from 'react';
import NewForm from "./NewForm";

function Madlibs() {
    const [madlib, setMadlib] = useState([]);
    const [showContent, setShowContent] = useState(false)

    const add = (newEntry) => {
        setMadlib(newEntry);
        setShowContent(true);
    };

    const reset = () => {
        setShowContent(false);
    };


    return (
        <div>
            <h1>Madlibs!</h1>
            <div>
                {showContent ? (<div>
                    <h4>{`There was a ${madlib.color} ${madlib.noun} who loved a ${madlib.adj} ${madlib.noun2}!`}</h4>
                    <button onClick={reset}>Restart</button>
                </div>) : (<div>
                    <NewForm add={add} />
                </div>)}
            </div>
        </div>
    )
};
export default Madlibs;

