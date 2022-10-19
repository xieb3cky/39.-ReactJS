import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function NewColorForm({ addColor }) {
    const [form, updateForm] = useState({ name: "", hex: "" });
    let history = useHistory();

    function handleChange(e) {
        updateForm(data => ({ ...data, [e.target.name]: e.target.value }))
    };

    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [form.name]: form.hex });
        updateForm({ name: "", hex: "" });
        history.push("/colors");
    };

    return (
        <div>
            <h1>Add a new color! </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color Name</label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Enter Color Name"
                        onChange={handleChange}
                        value={form.name}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Color Value</label>
                    <input
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                    />
                </div>
                <button>
                    Add Color
                </button>

            </form>
            <Link to={"/colors"}>Back</Link>
        </div>
    );

}

export default NewColorForm;