import React from "react";
import Commit from "./Commit";
import httpInstance from "../../../../helpers/httpClient";

import Style from "../../style/repo.module.css";

type CommitsProps = {
  owner: string;
  name: string;
};

const PER_PAGE_ITEMS: number = 5;

const Commits = ({ owner, name }: CommitsProps): JSX.Element => {
  const [commits, setCommits] = React.useState([]);
  React.useEffect(() => {
    httpInstance({
      method: "get",
      url: `/repos/${owner}/${name}/commits`,
      headers: {
        accept: "application/vnd.github.v3+json",
      },
      params: {
        per_page: PER_PAGE_ITEMS, // latest 5 only
      },
    })
      .then((res) => {
        setCommits(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3>Latest Commits</h3>
      {commits?.length > 0 && (
        <ul className={Style.list}>
          {commits.map((item: any) => {
            return (
              <Commit
                key={item.sha}
                html_url={item.html_url}
                message={item.commit.message}
                name={item.commit.author.name}
                date={item.commit.author.date}
              />
            );
          })}
        </ul>
      )}

      {commits?.length === 0 && <h4>No Records available</h4>}
    </>
  );
};

export default Commits;
