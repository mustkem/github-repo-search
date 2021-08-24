import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Commits from "./components/Commits";
import Issues from "./components/Issues";

import Style from "./style/repo.module.css";

function Repo() {
  let { owner, name } = useParams();
  const [repo, setRepo] = React.useState({});
  React.useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/repos/${owner}/${name}`,
      headers: {
        accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => {
        setRepo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("repo", repo);

  return (
    <div className="content">
      <div className="container">
        <div className={Style.space}>
          <h3>Repo Details</h3>
          <div className="row">
            <div className="col-md-3 col-xs-1">
              <strong>Name</strong>
              <div>{repo.full_name}</div>
            </div>
            <div className="col-md-3 col-xs-1">
              <strong>Default Branch</strong>
              <div>{repo.default_branch}</div>
            </div>
            <div className="col-md-3 col-xs-1">
              <strong>Description</strong>
              <div>{repo.description}</div>
            </div>
            <div className="col-md-3 col-xs-1">
              <strong>Open Issues Count</strong>
              <div>{repo.open_issues_count}</div>
            </div>
          </div>
        </div>
        <Commits item={repo} owner={owner} name={name} />
        <Issues item={repo} owner={owner} name={name} />
      </div>
    </div>
  );
}

export default Repo;
