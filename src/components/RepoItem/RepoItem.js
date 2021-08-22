import React from "react";
import { Link } from "react-router-dom";

import Style from "./style/repoItem.module.css";

function RepoItem({ item, deleteRepo, canDelete, canAdd, addRepo, isAdded }) {
  return (
    <li className={Style.item} key={item.id}>
      <div className={Style.detail}>
        <Link to={`/projects/${item.full_name}`}>{item.full_name}</Link>
        <div className={Style.info}>
          {item.language && (
            <div className={Style.section}>
              <label className={Style.title}>Language</label>
              <span>{item.language}</span>
            </div>
          )}
          {item.owner.login && (
            <div className={Style.section}>
              <label className={Style.title}>Owner</label>
              <span>{item.owner.login}</span>
            </div>
          )}
          {item.language && (
            <div className={Style.section}>
              <label className={Style.title}>Last Updated</label>
              <span>{item.updated_at}</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <a target="_blank" className={Style.smallLink} href={item.html_url}>Open in Github</a>
        {canDelete && (
          <button
            onClick={() => {
              deleteRepo(item.id);
            }}
          >
            Delete
          </button>
        )}
        {canAdd && (
          <>
            {!isAdded && (
              <button
                onClick={() => {
                  addRepo(item);
                }}
              >
                Add
              </button>
            )}
            {isAdded && (
              <span
                style={{
                  border: "1px solid lightgray",
                  borderRadius: 4,
                  fontSize: 12,
                  padding: 2,
                }}
              >
                Added
              </span>
            )}
          </>
        )}
      </div>
    </li>
  );
}

export default RepoItem;
