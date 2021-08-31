import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Home from "./Home";

// this data is available in localstorage- No api is calling
afterEach(cleanup);

it(`should show repo list title and should not render any repo initially. 
  And should show a message to user to select some repos`, () => {
  const HomeProps = {
    addRepo: jest.fn(),
    deleteRepo: jest.fn(),
    repos: { data: [] },
  };

  render(<Home {...HomeProps} />);

  const element = screen.getByText("My selected Repos");
  expect(element).toBeInTheDocument();
  expect(
    screen.getByText("No Repo selected in your account.")
  ).toBeInTheDocument();
});

test(`should render one repo`, () => {
  const HomeProps = {
    addRepo: jest.fn(),
    deleteRepo: jest.fn(),
    repos: { data: [{ full_name: "My-Repo-Name", id: "0" }] },
  };

  act(() => {
    render(
      <Router>
        <Home {...HomeProps} />
      </Router>
    );
  });

  const element = screen.queryAllByText("My-Repo-Name");
  expect(element).toHaveLength(1);
});
