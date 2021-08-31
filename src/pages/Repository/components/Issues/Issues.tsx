import React from "react";
import Issue from "../Issue";
import axios from "axios";
import config from "../../../../config";

import Style from "../../style/repo.module.css";

const PER_PAGE_ITEMS: number = 5;

type IssuesProps = {
  owner: String;
  name: string;
};

const Issues = ({ owner, name }: IssuesProps): JSX.Element => {
  const [issues, setIssues] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${config.API_URL}repos/${owner}/${name}/issues`, {
        headers: {
          accept: "application/vnd.github.v3+json",
          authorization: `token ${localStorage.getItem("access_token_github")}`,
        },
        params: {
          per_page: PER_PAGE_ITEMS, // latest 5 only
        },
      })
      .then((res) => {
        setIssues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [owner, name]);

  return (
    <div data-testid="issues">
      <h3>Latest Issues</h3>
      {issues?.length > 0 && (
        <ul className={Style.list}>
          {issues.map((item: any) => {
            return (
              <Issue
                key={item.sha}
                html_url={item.html_url}
                title={item.title}
                user={item.user.login}
                state={item.state}
              />
            );
          })}
        </ul>
      )}
      {issues?.length === 0 && <h4>No Records available</h4>}
    </div>
  );
};

export default Issues;
