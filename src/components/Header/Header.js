import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user.data);
  return (
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
          {user?.name && <span>Hello {user.name}</span>}
        </div>
      </div>
    </header>
  );
}

export default Header;
