import { render,screen } from "@testing-library/react";
import NavBar from "./NavBar";
test("The NavBar component should render", () => {
  const view = render(<NavBar />);
  expect(view).toMatchSnapshot();
});

test("The NavBar component should render with a title", () => {
  const view = render(<NavBar title="Test application" />);
  expect(view).toMatchSnapshot();
});
