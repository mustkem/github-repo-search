import React, { memo } from "react";

type CommitProps = {
  html_url: string;
  message: string;
  name: string;
  date: string;
};

const Commit = memo(
  ({ html_url, message, name, date }: CommitProps): JSX.Element => {
    return (
      <li>
        <a href={html_url} target="_blank" rel="noreferrer">
          <div>{message}</div>
          <span>{name}</span>
          <span>{date}</span>
        </a>
      </li>
    );
  }
);

export default Commit;
