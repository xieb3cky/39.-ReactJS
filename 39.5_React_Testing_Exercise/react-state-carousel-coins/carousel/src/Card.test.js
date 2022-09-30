import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

/**Part 2 */
//smoke test
it("renders without crashing", function () {
    render(<Card />);
});

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});