import React from "react";

function Project({ item }) {
  return (
    <li>
      <a href={item.html_url} target="_blank">
          <div>

        {item.commit?.message}
          </div>
          <span>
              {
                  item.commit.author.name
              }
          </span>
          <span>
              {
                  item.commit.author.date
              }
          </span>
      </a>
    </li>
  );
}

export default Project;
