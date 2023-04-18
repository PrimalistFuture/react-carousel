import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";


it("renders without crashing", function () {
  render(<Card
    src="test1.com"
    caption="testing image 1"
   />);
});

it("matches snapshot", function () {
  const { container } = render(<Card src="test1.com" caption="testing image 1" />);
  expect(container).toMatchSnapshot();
});