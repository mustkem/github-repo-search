import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import httpInstance from "./helpers/httpClient";

import Home from "./pages/Home";
import Project from "./Project";
import Login from "./pages/Login";
function App() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    httpInstance({
      method: "get",
      url: `https://api.github.com/user`,
    })
      .then((res) => {
        setUser(res.data);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        setIsAuthenticated(false);
      })
      .then(function () {
        // always executed
        setLoading(false);
      });
  }, []);
  return (
    <div className="app">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            {!loading && (
              <>
                <div>
                  <header className="header">
                    <div className="container">
                      <h2>Super Awesome Search Portal</h2>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Link to="/">Home</Link>
                        {isAuthenticated && <span>Hello {user.name}</span>}
                        {!isAuthenticated && (
                          <a href="https://github.com/login/oauth/authorize?client_id=035ef775e09bdb096acb">
                            Login
                          </a>
                        )}
                      </div>
                    </div>
                  </header>
                  <Switch>
                    <Route path="/projects/:owner/:name">
                      <Project />
                    </Route>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
                <footer className="footer">copyright@2021</footer>
              </>
            )}
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
