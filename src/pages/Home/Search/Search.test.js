import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Search from "./index";

afterEach(cleanup);

test("render search input cell and check whether it has correct properties. Check label.", () => {
  const searchData = {
    repos: { data: [] },
    addRepo: jest.fn(),
  };

  render(<Search {...searchData} />);

  const inputEl = screen.getByLabelText("search-repos");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "search");
  expect(inputEl).toHaveAttribute("placeholder", "Search Repos");
});

it("should accept value to input field", () => {
  const searchData = {
    repos: { data: [{}] },
    addRepo: jest.fn(),
  };

  render(<Search {...searchData} />);

  const inputEl = screen.getByLabelText("search-repos");

  fireEvent.change(inputEl, {
    target: { value: "chuck" },
  });

  expect(screen.getByLabelText("search-repos")).toHaveValue("chuck");
});
