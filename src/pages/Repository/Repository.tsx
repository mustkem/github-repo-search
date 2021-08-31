import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../config";

import Commits from "./components/Commits";
import Issues from "./components/Issues";
import Loader from "../../components/Loader";

import Style from "./style/repo.module.css";

const Repo = (): JSX.Element => {
  let { owner, name }: { owner: string; name: string } = useParams();
  const [data, setData] = useState<any>({ loading: true });
  useEffect(() => {
    axios
      .get(`${config.API_URL}repos/${owner}/${name}`, {
        headers: {
          accept: "application/vnd.github.v3+json",
          authorization: `token ${localStorage.getItem("access_token_github")}`,
        },
      })
      .then((res) => {
        setData({ repo: res.data, loading: false });
      })
      .catch((err) => {
        setData({ repo: {}, loading: false, error: "Error" });
      });
  }, [owner, name]);

  return (
    <div className="content">
      <div data-testid="repository" className="container">
        {data.loading && <Loader />}
        {!data.loading && (
          <>
            <div className={Style.space}>
              <h3>Repo Details</h3>
              <div className="row">
                <div className="col-md-3 col-xs-1">
                  <strong>Name</strong>
                  <div data-testid="repo-name">{data.repo.full_name}</div>
                </div>
                <div className="col-md-3 col-xs-1">
                  <strong>Default Branch</strong>
                  <div data-testid="default-branch">
                    {data.repo.default_branch}
                  </div>
                </div>
                <div className="col-md-3 col-xs-1">
                  <strong>Description</strong>
                  <div data-testid="description ">{data.repo.description}</div>
                </div>
                <div className="col-md-3 col-xs-1">
                  <strong>Open Issues Count</strong>
                  <div data-testid="open_issues_count">
                    {data.repo.open_issues_count}
                  </div>
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
