import React, { memo } from "react";

type IssueProps = {
  html_url: string;
  title: string;
  user: string;
  state: string;
};
const Issue = memo(
  ({ html_url, title, user, state }: IssueProps): JSX.Element => {
    return (
      <li>
        <a href={html_url} target="_blank" rel="noreferrer">
          <div>{title}</div>
          <span>{user}</span>
          <span>{state}</span>
        </a>
      </li>
    );
  }
);

export default Issue;
