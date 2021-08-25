import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import RepoItem from "./index";

it(`should render one repo`, () => {
  const RepoItemProps = {
    addRepo: jest.fn(),
    deleteRepo: jest.fn(),
    item: {
      full_name: "My-Repo-Name",
      id: "0",
      language: "JavaScript",
      owner: { login: "must" },
    },
    canDelete: false,
    canAdd: false,
    isAdded: false,
  };

  act(() => {
    render(
      <Router>
        <RepoItem {...RepoItemProps} />
      </Router>
    );
  });

  expect(screen.getByText("My-Repo-Name")).toBeInTheDocument();
  expect(screen.getByText("JavaScript")).toBeInTheDocument();
  expect(screen.getByText("must")).toBeInTheDocument();
});

it(`should allow user to add repo`, async () => {
  const handleAdd = jest.fn();

  const RepoItemProps = {
    addRepo: handleAdd,
    deleteRepo: jest.fn(),
    item: {
      full_name: "My-Repo-Name",
      id: "0",
      language: "JavaScript",
      owner: { login: "must" },
    },
    canDelete: false,
    canAdd: true,
    isAdded: false,
  };

  act(() => {
    render(
      <Router>
        <RepoItem {...RepoItemProps} />
      </Router>
    );
  });

  const button = screen.getByText("Add");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  expect(handleAdd).toHaveBeenCalledTimes(1);
});

it(`should allow user to delete repo`, async () => {
  const handleDelete = jest.fn();

  const RepoItemProps = {
    addRepo: jest.fn(),
    deleteRepo: handleDelete,
    item: {
      full_name: "My-Repo-Name",
      id: "0",
      language: "JavaScript",
      owner: { login: "must" },
    },
    canDelete: true,
    canAdd: false,
    isAdded: false,
  };

  act(() => {
    render(
      <Router>
        <RepoItem {...RepoItemProps} />
      </Router>
    );
  });

  const button = screen.getByText("Delete");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  expect(handleDelete).toHaveBeenCalledTimes(1);
});
