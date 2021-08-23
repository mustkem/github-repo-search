import React, { useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";

import RepoItem from "../../../components/RepoItem";
import { addRepo } from "../../../store/actions";

import useSearch from "../../../components/useSearch";

function Search() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { items, hasMore, loading, error } = useSearch(query, pageNumber);

  const dispatch = useDispatch();

  let repos = useSelector((state) => state.repos.data);

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

  const scrollRef = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (scrollRef.current) scrollRef.current.disconnect();
      scrollRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) scrollRef.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div>
      <h2 style={{ padding: "25px 0" }}>Search Repos</h2>
      <Form.Control
        type="search"
        placeholder="Search Repos"
        value={query}
        onChange={handleSearch}
      />
      <div style={{ height: 400, overflow: "auto" }}>
        <div>
          {items.map((item, index) => {
            const isAdded = getIsAdded(item.id);
            if (items.length === index + 1) {
              return (
                <RepoItem
                  ref={lastElementRef}
                  isAdded={isAdded}
                  canAdd
                  item={item}
                  key={item.id}
                  addRepo={handleAddRepo}
                />
              );
            } else {
              return (
                <RepoItem
                  isAdded={isAdded}
                  canAdd
                  item={item}
                  key={item.id}
                  addRepo={handleAddRepo}
                />
              );
            }
          })}
          <div style={{ padding: 10, textAlign: "center", minHeight: 50 }}>
            {loading && "Loading..."}
            {error && "Error"}
            {!loading &&
              !error &&
              items.length === 0 &&
              "Enter Repository name to search"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
