import React from "react";

function Login() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <a href="https://github.com/login/oauth/authorize?client_id=035ef775e09bdb096acb">
        Login
      </a>
    </div>
  );
}

export default Login;
