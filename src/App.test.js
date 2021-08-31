import { render, screen, cleanup } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

afterEach(cleanup);

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
