import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


it("renders without crashing", function () {
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
   />);
});

it("matches snapshot", function () {
  const { container } = render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// it("works when you click on the left arrow", function() {
//   const { container } = render(
//     <Carousel
//       photos={TEST_IMAGES}
//       title="images for testing"
//     />
//   );
//   // expect the first image to show, but not the second
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).not.toBeInTheDocument();

//   // move back in the carousel
//   const leftArrow = container.querySelector(".bi-arrow-left-circle");
//   fireEvent.click(leftArrow);

//   // expect the third image to show, but not the first
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).not.toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 3"]')
//   ).toBeInTheDocument();
// });

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  // move back in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

// TODO: create a variable for left and right arrow so that it is more readable and obvious
// Especially important when selecting that something is not in doc. Make them global constants
it("left arrow is gone when on first image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // left arrow is not in doc, right arrow is
  expect(container.querySelector(".bi-arrow-left-circle")).not.toBeInTheDocument();
  expect(container.querySelector(".bi-arrow-right-circle")).toBeInTheDocument();
});

// TODO: create a variable for left and right arrow so that it is more readable and obvious

it("right arrow is gone when on last image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  // right arrow is not in doc, left arrow is
  expect(container.querySelector(".bi-arrow-right-circle")).not.toBeInTheDocument();
  expect(container.querySelector(".bi-arrow-left-circle")).toBeInTheDocument();
});