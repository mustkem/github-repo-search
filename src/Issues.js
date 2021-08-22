import React from "react";
import axios from "axios";
import Issue from "./Issue";
function Project({ owner, name }) {
  const [issues, setIssues] = React.useState([]);
  React.useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/repos/${owner}/${name}/issues`,
      headers: {
        accept: "application/vnd.github.v3+json",
      },
      params: {
        per_page: 5,
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
      <ul>
        {issues.map((item) => {
          return <Issue key={item.sha} item={item} />;
        })}
      </ul>
    </>
  );
}

export default Project;
