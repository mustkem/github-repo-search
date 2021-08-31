import { memo } from "react";

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
          {title}
        </a>
        <div>
          <span>{user}</span>&nbsp;
          <strong>Status: {state}</strong>
        </div>
      </li>
    );
  }
);

export default Issue;
