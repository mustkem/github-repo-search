import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteRepo } from "../../store/actions";

import Search from "./Search";
import RepoItem from "../../components/RepoItem";

import Style from './style/home.module.css';

function Home() {
  const dispatch = useDispatch();

  const repos = useSelector((state) => state.repos);

  const handleDeleteRepo = (id) => {
    dispatch(deleteRepo(id));
  };

  return (
      <div className="container">
        <Search />
        <ul className={Style.list}>
          {repos.data.map((item) => {
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
      </div>
  );
}

export default Home;
