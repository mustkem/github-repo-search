import {
  render,
  act,
  screen,
  //   waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

import Repository from "./Repository";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    name: "uiautomator2",
    owner: "openatx",
  }),
  useRouteMatch: () => ({ url: "/repos/openatx/uiautomator2" }),
}));

jest.mock("axios");

beforeEach(() => {
  jest.clearAllMocks();
});

it("fetch repository and displays the repo details correctly", async () => {
  const repo = {
    full_name: "name",
    default_branch: "master",
    description: "test",
    open_issues_count: "2",
  };

  jest.spyOn(axios, "get").mockResolvedValue({ data: repo });

  act(() => {
    render(
      <Router>
        <Repository />
      </Router>
    );
  });

  // check for loader to be removed //
  // await waitForElementToBeRemoved(screen.getByTestId("loader"));
  // OR

  await waitFor(() => {
    expect(screen.getByTestId("repository")).toBeInTheDocument();
  });

  expect(screen.getByTestId("repo-name").textContent).toBe(repo.full_name);
  expect(screen.getByTestId("default-branch").textContent).toBe(
    repo.default_branch
  );
  expect(screen.getByTestId("description").textContent).toBe(repo.description);
  expect(screen.getByTestId("open_issues_count").textContent).toBe(
    repo.open_issues_count
  );
});
