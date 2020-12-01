import React from "react";
import Category from "../Category.jsx";

describe("Category tests", () => {
  it("renders correctly", () => {
    const test = {category : "food"};
    const { container } = (<Category category = {test}/>);
    expect(container).toMatchSnapshot();
  });
});