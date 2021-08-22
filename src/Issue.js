import React from "react";

function Project({ item }) {
  return (
    <li>
      <a href={item.html_url} target="_blank">
        <div>{item.title}</div>
        <span>{item.user.login}</span>
        <span>{item.state}</span>
      </a>
    </li>
  );
}

export default Project;
