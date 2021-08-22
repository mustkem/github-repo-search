import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Commits from "./Commits";
import Issues from "./Issues";

function Project() {
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
    <div className="project-sec">
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            margin: 10,
            padding: 10,
            minwidth: 100,
            background: "lightgray",
          }}
        >
          <div>Name</div>
          <div>{repo.full_name}</div>
        </div>
        <div
          style={{
            margin: 10,
            padding: 10,
            minwidth: 100,
            background: "lightgray",
          }}
        >
          <div>Default Branch</div>
          <div>{repo.default_branch}</div>
        </div>
        <div
          style={{
            margin: 10,
            padding: 10,
            minwidth: 100,
            background: "lightgray",
          }}
        >
          <div>Description</div>
          <div>{repo.description}</div>
        </div>
        <div
          style={{
            margin: 10,
            padding: 10,
            minwidth: 100,
            background: "lightgray",
          }}
        >
          <div>Open Issues Count</div>
          <div>{repo.open_issues_count}</div>
        </div>
      </div>
      <Commits item={repo} owner={owner} name={name} />
      <Issues item={repo} owner={owner} name={name} />
    </div>
  );
}

export default Project;
