import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Commits from "./components/Commits";
import Issues from "./components/Issues";
import Loader from "../../components/Loader";

import Style from "./style/repo.module.css";

const Repo = (): JSX.Element => {
  let { owner, name }: { owner: string; name: string } = useParams();
  const [loading, setLoading] = useState(true);
  const [repo, setRepo] = useState<any>({});
  useEffect(() => {
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
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  console.log("repo", repo);

  return (
    <div className="content">
      <div className="container">
        {loading && <Loader />}
        {!loading && (
          <>
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
            <Commits owner={owner} name={name} />
            <Issues owner={owner} name={name} />
          </>
        )}
      </div>
    </div>
  );
};

export default Repo;
