import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteRepo } from "../../store/actions";

import Search from "./Search";
import RepoItem from "../../components/RepoItem";

import Style from "./style/home.module.css";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  const repos = useSelector((state: any) => state.repos);

  const handleDeleteRepo = (id: string) => {
    dispatch(deleteRepo(id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <Search />
        </div>
        <div className="col-md-6 col-xs-12">
          <div>
            <h2 className={Style.title}>My selected Repos</h2>
            {repos.data?.length > 0 && (
              <ul className={Style.list}>
                {repos.data.map((item: any) => {
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
};

export default Home;
