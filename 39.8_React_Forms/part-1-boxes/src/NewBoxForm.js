import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/**
 * Form for creating a new box to add to box list.
 * 
 * Has state for box's width, height, and background color.
 * 
 * On submission, send values to parent 
 */


const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Update local state w/curr state of input elem */

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    /** Send {width, height, and background color} to parent & clear form
    */

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    };


    /** render form */

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="width">Width:</label>
                    <input
                        type="text"
                        id="width"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input
                        type="text"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color:</label>
                    <input
                        type="text"
                        id="backgroundColor"
                        name="backgroundColor"
                        value={formData.backgroundColor}
                        onChange={handleChange}
                    />
                </div>

                <button>Add a new box!</button>
            </form>
        </div>
    );
};


export default NewBoxForm;