import { render, waitFor, cleanup } from "@testing-library/react";
import mockAxios from "axios";
import Issues from "./Issues";

afterEach(cleanup);

it("should fetch issues and displays them correctly", async () => {
  const issues = [
    {
      sha: "1",
      html_url: "github.com",
      title: "test",
      user: {
        login: "user",
      },
      state: "state",
    },
  ];

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: issues,
    })
  );

  mockAxios.get.mockImplementationOnce(() =>
    Promise.reject({
      data: "error-issues",
    })
  );

  const { getByTestId } = render(<Issues owner="test" name="test" />);

  const resovedElement = await waitFor(() => getByTestId("issues"));

  expect(resovedElement.querySelector("a").getAttribute("href")).toBe(
    issues[0].html_url
  );
  expect(resovedElement.querySelector("a").textContent).toBe(issues[0].title);
  expect(resovedElement.querySelector("span").textContent).toBe(
    issues[0].user.login
  );
  expect(resovedElement.querySelector("strong").textContent).toBe(
    "Status: " + issues[0].state
  );
});
