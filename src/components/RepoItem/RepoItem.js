import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import Style from "./style/repoItem.module.css";

const RepoItem = React.forwardRef(
  ({ item, deleteRepo, canDelete, canAdd, addRepo, isAdded }, externalRef) => {
    return (
      <li ref={externalRef} className={Style.item} key={item.id}>
        <Link to={`/projects/${item.full_name}`}>{item.full_name}</Link>
        <div className={Style.wrap}>
          <div className={Style.detail}>
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
            </div>
          </div>

          <div>
            <a
              rel="noreferrer"
              target="_blank"
              className={Style.smallLink}
              href={item.html_url}
            >
              Open in Github
            </a>
            {canDelete && (
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => {
                  deleteRepo(item.id);
                }}
              >
                Delete
              </Button>
            )}
            {canAdd && (
              <>
                {!isAdded && (
                  <Button
                    size="sm"
                    onClick={() => {
                      addRepo(item);
                    }}
                  >
                    Add
                  </Button>
                )}
                {isAdded && (
                  <Button size="sm" disabled variant="outline-primary">
                    Added
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </li>
    );
  }
);

export default RepoItem;
