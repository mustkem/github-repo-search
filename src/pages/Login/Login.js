import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import axios from 'axios';

import httpInstance from "../../helpers/httpClient";

function Login() {
  const location = useLocation();
  useEffect(() => {
    const query = parse(location.search);
    // const
    const code = query.code;
    // const redirect_uri =

    axios({
      method: "post",
      url: `http://localhost:5000/authenticate`,
      //   url: `https://github.com/login/oauth/access_token`,
        data: {
          code,
        },
    })
      .then((res) => {
        localStorage.setItem("access_token_github", res.data.access_token)
        window.history.back();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="container">login in progress...</div>;
}

export default Login;
