import React from "react";
import axios from "axios";
import Commit from "./Commit";
function Project({ owner, name }) {
  const [commits, setCommits] = React.useState([]);
  React.useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/repos/${owner}/${name}/commits`,
      headers: {
        accept: "application/vnd.github.v3+json",
      },
      params: {
        per_page: 5,
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
      <ul>
        {commits.map((item) => {
          return <Commit key={item.sha} item={item} />;
        })}
      </ul>
    </>
  );
}

export default Project;
