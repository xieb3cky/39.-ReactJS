import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function NewItem({ newItem }) {

    const INITIAL_STATE = {
        id: "",
        name: "",
        description: "",
        recipe: "",
        serve: "",
        foodType: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const navigate = useNavigate();

    const handleChange = (evt) => {
        evt.persist();
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        newItem({ ...formData, id: name.toLowerCase() })
        setFormData(INITIAL_STATE)
        navigate(`/${foodType}`)
    };

    const { name, description, recipe, serve, foodType } = formData;

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <FormGroup row>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Col sm={10}>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                value={name}
                            /></Col>

                    </div>
                </FormGroup>
                <FormGroup row>
                    <div>
                        <label htmlFor="description">Description</label>
                        <Col sm={10}>
                            <input
                                id="description"
                                type="text"
                                name="description"
                                placeholder="Description"
                                onChange={handleChange}
                                value={description}
                            />
                        </Col>
                    </div>
                </FormGroup>
                <div>
                    <label htmlFor="recipe">Recipe</label>
                    <input
                        id="recipe"
                        type="text"
                        name="recipe"
                        placeholder="Recipe"
                        onChange={handleChange}
                        value={recipe}
                    />
                </div>
                <div>
                    <label htmlFor="serve">How to serve?</label>
                    <input
                        id="serve"
                        type="text"
                        name="serve"
                        placeholder=""
                        onChange={handleChange}
                        value={serve}
                    />
                </div>
                <div>
                    <label htmlFor="foodType">Food Type</label>
                    <select
                        onChange={handleChange}
                        id="foodType"
                        name="foodType"
                        value={foodType}>
                        <option value="snacks">Snack</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </div>
                <button>
                    Submit
                </button>

            </form>

        </div >
    )

}

export default NewItem;