import React from "react";
import Style from "./style/login.module.css";

const Login = (): JSX.Element => {
  return (
    <div className="container">
      <div className={Style.container}>
        <div>
          <h4 className={Style.title}>Welcome</h4>
          <div className={Style.label}>Super amazing app</div>
          <div className={Style.wrap}>
            <a
              className={Style.link}
              href="https://github.com/login/oauth/authorize?client_id=035ef775e09bdb096acb"
            >
              LOGIN WITH GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
