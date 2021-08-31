import { render, cleanup } from "@testing-library/react";
import Commit from "./Commit";

afterEach(cleanup);

it("Should render commit correctly", async () => {
  const commit = {
    html_url: "github.com",
    message: "test",
    name: "author",
    date: new Date().toLocaleDateString(),
  };

  const { getByTestId, container } = render(<Commit {...commit} />);

  expect(container.querySelector("a").getAttribute("href")).toBe(
    commit.html_url
  );
  expect(container.querySelector("a").textContent).toBe(commit.message);
  expect(getByTestId("name").textContent).toBe(commit.name);
  expect(getByTestId("date").textContent).toBe(commit.date);
});
