import React from "react";
import Issue from "./Issue";
import httpInstance from "../../../../helpers/httpClient";

import Style from "../../style/repo.module.css";

const PER_PAGE_ITEMS: number = 5;

type IssuesProps = {
  owner: String;
  name: string;
};

const Issues = ({ owner, name }: IssuesProps): JSX.Element => {
  const [issues, setIssues] = React.useState([]);
  React.useEffect(() => {
    httpInstance({
      method: "get",
      url: `/repos/${owner}/${name}/issues`,
      headers: {
        accept: "application/vnd.github.v3+json",
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
  }, []);

  return (
    <>
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
    </>
  );
};

export default Issues;
