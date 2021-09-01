import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./index";
import config from "../../../config";

/* eslint-disable import/first */
jest.unmock("axios");

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

/*
axios-mock-adapter is used because it has support for axios.cancel which is used in searh repo hooks
*/

let mock;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

beforeEach(async () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn().mockReturnValue(null),
    unobserve: jest.fn().mockReturnValue(null),
    disconnect: jest.fn().mockReturnValue(null),
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

afterEach(() => {
  mock.reset();
});

it("User should be able to enter value in input field and should get 1 repo as search result", async () => {
  const searchData = {
    repos: { data: [{}] },
    addRepo: jest.fn(),
  };

  const items = [
    {
      id: 1,
      full_name: "John",
      language: "Javascript",
      owner: { login: "me" },
    },
  ];

  mock
    .onGet(`${config.API_URL}search/repositories`, {
      params: { q: "chuck", page: 1 },
    })
    .reply(200, { items: items });

  render(
    <Router>
      <Search {...searchData} />
    </Router>
  );

  const inputEl = screen.getByLabelText("search-repos");

  fireEvent.change(inputEl, {
    target: { value: "chuck" },
  });

  await waitFor(() => {
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  expect(screen.getByLabelText("search-repos")).toHaveValue("chuck");
  expect(screen.getByText("John").textContent).toBe(items[0].full_name);
  expect(screen.getByTestId("language").textContent).toBe(items[0].language);
  expect(screen.getByTestId("owner").textContent).toBe(items[0].owner.login);
});

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
