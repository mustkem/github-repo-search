import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Repository";
import Login from "./pages/Login";
import Auth from "./pages/Auth";

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function Routes({ isAuthenticated }) {
  console.log(isAuthenticated, "isAuthenticatedqqqqqqqq");
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <PrivateRoute
        isAuthenticated={isAuthenticated}
        path="/projects/:owner/:name"
        component={Project}
      />
      <PrivateRoute
        isAuthenticated={isAuthenticated}
        path="/"
        component={Home}
      />
    </Switch>
  );
}

export default Routes;
