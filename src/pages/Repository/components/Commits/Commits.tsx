import React from "react";
import Commit from "../Commit";
import axios from "axios";
import config from "../../../../config";

import Style from "../../style/repo.module.css";

type CommitsProps = {
  owner: string;
  name: string;
};

const PER_PAGE_ITEMS: number = 5;

const Commits = ({ owner, name }: CommitsProps): JSX.Element => {
  const [commits, setCommits] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${config.API_URL}repos/${owner}/${name}/commits`, {
        params: {
          per_page: PER_PAGE_ITEMS, // latest 5 only
        },
        headers: {
          authorization: `token ${localStorage.getItem("access_token_github")}`,
        },
      })
      .then(function (res) {
        setCommits(res.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, [owner, name]);

  return (
    <div data-testid="commits">
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
    </div>
  );
};

export default Commits;
