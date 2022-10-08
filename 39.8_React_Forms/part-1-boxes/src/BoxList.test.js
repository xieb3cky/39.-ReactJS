import { render, fireEvent } from "@testing-library/react";
import React from "react";
import BoxList from "./BoxList";


function addBox({ getByLabelText, queryByText, getAllByText }) {

    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const bgColorInput = getByLabelText("Background Color:");
    const submitBtn = getAllByText("Add a new box!")[0];

    //fill the form & submit
    fireEvent.change(widthInput, { target: { value: "2" } });
    fireEvent.change(heightInput, { target: { value: "2" } });
    fireEvent.change(bgColorInput, { target: { value: "green" } });

    fireEvent.click(submitBtn);
};
// Smoke Test
it("renders without crashing", function () {
    render(<BoxList />);
});

//Snapshot Test
it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});


//Test ability to enter data, submit form, & outcome in the DOM
it("can add a new box", function () {
    const boxList = render(<BoxList />);
    //expect no box yet
    expect(boxList.queryByText("Remove")).not.toBeInTheDocument();

    //add box
    addBox(boxList);

    // item exist in document
    const rmBtn = boxList.queryByText("Remove");
    expect(rmBtn).toBeInTheDocument();
    expect(rmBtn.previousSibling).toHaveStyle(
        `width: 2em;
        height: 2em;
        background-color: green;`)
});

// Test remove box function

it("can remove a box", function () {
    const { queryByText } = render(<BoxList />);
    const boxList = render(<BoxList />);

    //add box
    addBox(boxList);

    const rmBtn = boxList.getByText("Remove");

    //click remove button
    fireEvent.click(rmBtn);

    expect(rmBtn).not.toBeInTheDocument();
});