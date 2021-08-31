import { memo } from "react";

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
          {message}
        </a>
        <div>
          <span data-testid="name">{name}</span>&nbsp;
          <span data-testid="date">
            {date && new Date(date).toLocaleDateString()}
          </span>
        </div>
      </li>
    );
  }
);

export default Commit;
