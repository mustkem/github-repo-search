import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";

import Routes from "./Routes";

import { fetchUser } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const isAuthenticated = useSelector(
    (state) => state.user.data?.isAuthenticated
  );

  React.useEffect(() => {
    dispatch(fetchUser()).catch(() => {
      //error
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <div>
          <Header />
          {!loading && <Routes isAuthenticated={isAuthenticated} />}
        </div>
        <footer className="footer">copyright@2021</footer>
      </Router>
    </div>
  );
}

export default App;
