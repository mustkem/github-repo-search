import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { parse } from "query-string";
import axios from "axios";

import { onFetchUser } from "../../store/actions";

function Auth() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const query = parse(location.search);
    const code = query.code;

    axios({
      method: "post",
      url: `http://localhost:5000/authenticate`,
      data: {
        code,
      },
    })
      .then((res) => {
        localStorage.setItem("access_token_github", res.data.access_token);
        dispatch(onFetchUser(res.data));
        history.push("/");
      })
      .catch((err) => {
        //TODO: Show error message in UI
        history.push("/login");
      });
  }, []);
  return <div className="container">login in progress...</div>;
}

export default Auth;
