import { render, waitFor, cleanup } from "@testing-library/react";
import mockAxios from "axios";
import Commits from "./Commits";

afterEach(cleanup);

it("should fetch commits and displays them correctly", async () => {
  const commits = [
    {
      sha: "1",
      html_url: "github.com",
      commit: {
        message: "test",
        author: {
          name: "name ",
          date: new Date().toLocaleDateString(),
        },
      },
    },
  ];

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: commits,
    })
  );

  mockAxios.get.mockImplementationOnce(() =>
    Promise.reject({
      data: "error-commits",
    })
  );

  const { getByTestId } = render(<Commits owner="test" name="test" />);

  const resovedElement = await waitFor(() => getByTestId("commits"));

  expect(resovedElement.querySelector("a").getAttribute("href")).toBe(
    commits[0].html_url
  );
  expect(resovedElement.querySelector("a").textContent).toBe(
    commits[0].commit.message
  );
  expect(getByTestId("name").textContent).toBe(commits[0].commit.author.name);
  expect(getByTestId("date").textContent).toBe(commits[0].commit.author.date);
});
