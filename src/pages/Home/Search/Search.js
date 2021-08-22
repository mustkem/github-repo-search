import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';

import httpInstance from "../../../helpers/httpClient";

import { addRepo } from "../../../store/actions";

import RepoItem from "../../../components/RepoItem";

function Search() {
  const [searchField, setSearchField] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultModel, setSearchResultModel] = useState(false);

  const dispatch = useDispatch();

  let repos = useSelector((state) => state.repos.data);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const getIsAdded = (id) => {
    var i;
    for (i = 0; i < repos.length; i++) {
      if (repos[i].id === id) {
        return true;
      }
    }
    return false;
  };

  const handleAddRepo = (item) => {
    dispatch(addRepo(item));
  };

  const getRepos = () => {
    httpInstance({
      method: "get",
      url: `/search/repositories?q=${searchField}`,
      headers: {
        accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => {
        setSearchResultModel(true);
        setSearchResults(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRepos();
  }, [searchField]);

  return (
    <div>
      <div>
        <h2>Search Repos</h2>
      </div>
      
      <div>
        <Form.Control
          value={searchField}
          type="search"
          placeholder="Search Repos"
          onChange={handleChange}
        />
        {searchResultModel && (
          <div style={{ position: "relative" }}>
            <ul
              style={{
                padding: 20,
                position: "absolute",
                top: 0,
                left: 0,
                height: "300px",
                overflow: "auto",
                background: "aliceblue",
                width: "100%",
                border: "1px solid lightgray",
              }}
            >
              {searchResults.map((item) => {
                const isAdded = getIsAdded(item.id);
                return (
                  <RepoItem
                    isAdded={isAdded}
                    canAdd
                    item={item}
                    key={item.id}
                    addRepo={handleAddRepo}
                  />
                );
              })}
            </ul>
            <button
              style={{
                padding: 7,
                position: "absolute",
                top: 0,
                right: 0,
              }}
              onClick={() => {
                setSearchResultModel(!searchResultModel);
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
