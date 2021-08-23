import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteRepo } from "../../store/actions";

import Search from "./Search";
import RepoItem from "../../components/RepoItem";

import Style from "./style/home.module.css";

function Home() {
  const dispatch = useDispatch();

  const repos = useSelector((state) => state.repos);

  const handleDeleteRepo = (id) => {
    dispatch(deleteRepo(id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Search />
        </div>
        <div className="col-6">
          <div>
            <h2 style={{ padding: "25px 0" }}>My selected Repos</h2>
            {repos.data?.length > 0 && (
              <ul className={Style.list}>
                {repos.data.map((item) => {
                  if (!item) return null;
                  return (
                    <RepoItem
                      key={item.id}
                      item={item}
                      deleteRepo={handleDeleteRepo}
                      canDelete
                    />
                  );
                })}
              </ul>
            )}
            {repos.data?.length === 0 && (
              <div className="center">No Repo selected in your account. </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
