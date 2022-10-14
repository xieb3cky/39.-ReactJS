import React, { useState } from "react";


const NewForm = ({ add }) => {
    const [entry, setEntry] = useState({
        noun: "",
        noun2: "",
        adj: "",
        color: ""
    });

    /** Update local state w/curr state of input elem */

    const handleChange = evt => {
        const { name, value } = evt.target;
        setEntry(data => ({
            ...data,
            [name]: value
        }));
    };

    /** Send entry to parent & clear form*/

    const handleSubmit = evt => {
        evt.preventDefault();
        add(entry);
        setEntry({
            noun: "",
            noun2: "",
            adj: "",
            color: ""
        });
    };

    /** render form */
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <input
                    id="noun"
                    name="noun"
                    type="text"
                    placeholder="Noun"
                    onChange={handleChange}
                    value={entry.noun}
                >
                </input>
            </div>

            <div>
                <input
                    id="noun2"
                    name="noun2"
                    type="text"

                    placeholder="Noun 2"
                    onChange={handleChange}
                    value={entry.noun2}
                >
                </input>
            </div>

            <div>
                <input
                    id="adj"
                    name="adj"
                    type="text"
                    placeholder="Adjective"
                    onChange={handleChange}
                    value={entry.adj}
                >
                </input>
            </div>

            <div>
                <input
                    id="color"
                    name="color"
                    type="text"
                    placeholder="Color"
                    onChange={handleChange}
                    value={entry.color}
                >
                </input>
            </div>

            <button>Create Story</button>
        </form>

    );
};

export default NewForm;