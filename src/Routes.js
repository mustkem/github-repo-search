import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Repo = lazy(() => import("./pages/Repository"));
const Login = lazy(() => import("./pages/Login"));
const Auth = lazy(() => import("./pages/Auth"));

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
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          path="/repos/:owner/:name"
          component={Repo}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          path="/"
          component={Home}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
