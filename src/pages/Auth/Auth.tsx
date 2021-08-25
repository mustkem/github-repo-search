import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { parse } from "query-string";
import httpInstance from "../../helpers/httpClient";

import { onFetchUser } from "../../store/actions";

const Auth = (): JSX.Element => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const query = parse(location.search);
    const code = query.code;

    httpInstance({
      method: "post",
      url: `https://github-auth-api.herokuapp.com/authenticate`,
      data: {
        code,
      },
    })
      .then((res) => {
        localStorage.setItem("access_token_github", res.data.access_token);
        dispatch(onFetchUser(res.data));
        history.replace("/");
      })
      .catch((err) => {
        //TODO: Show error message in UI
        history.replace("/login");
      });
  }, []);
  return (
    <div className="container">
      <div className="flex justify-center align-center h-200">
        Please wait... authentication is in progress.
      </div>
    </div>
  );
};

export default Auth;
