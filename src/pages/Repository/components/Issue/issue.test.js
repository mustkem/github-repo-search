import { render, cleanup } from "@testing-library/react";
import Issue from "./Issue";

afterEach(cleanup);

it("should render issue correctly", async () => {
  const issue = {
    html_url: "github.com",
    title: "test",
    user: "author",
    state: "open",
  };

  const { container } = render(<Issue {...issue} />);

  expect(container.querySelector("a").getAttribute("href")).toBe(
    issue.html_url
  );
  expect(container.querySelector("a").textContent).toBe(issue.title);
  expect(container.querySelector("span").textContent).toBe(issue.user);
  expect(container.querySelector("strong").textContent).toBe(
    "Status: " + issue.state
  );
});
