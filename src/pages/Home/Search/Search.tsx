import { useState, useRef, useCallback, useEffect } from "react";
import Form from "react-bootstrap/Form";

import RepoItem from "../../../components/RepoItem";

import useSearch from "../../../components/useSearch";
import Style from "../style/home.module.css";

const getIsAdded = (id: string, repos: any) => {
  for (let i = 0; i < repos.length; i++) {
    if (repos[i].id === id) {
      return true;
    }
  }
  return false;
};

type SearchProps = {
  addRepo: (payload: any) => void;
  repos: any;
};

const Search = ({ addRepo, repos }: SearchProps): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [actionQuery, setAtionQuery] = useState<string>("");
  const [timeoutInstance, setTimeoutInstance] = useState<any>(null);

  const [pageNumber, setPageNumber] = useState(1);

  const { items, hasMore, loading, error } = useSearch(query, pageNumber);

  const handleAddRepo = (item: any) => {
    addRepo(item);
  };

  const scrollRef: any = useRef();
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

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setAtionQuery(e.target.value);
  }

  useEffect(() => {
    clearTimeout(timeoutInstance);
    const instance = setTimeout(() => {
      setQuery(actionQuery);
      setPageNumber(1);
    }, 200);
    setTimeoutInstance(instance);
    return () => clearTimeout(timeoutInstance);
  }, [actionQuery]);

  return (
    <>
      <h2 className={Style.title}>Search Repos</h2>
      <Form.Control
        type="search"
        placeholder="Search Repos"
        aria-label="search-repos"
        value={actionQuery}
        onChange={handleSearch}
      />
      <ul data-testid="search-list" className={Style.container}>
        {items.map((item: any, index) => {
          const isAdded = getIsAdded(item.id, repos.data);

          if (items.length === index + 1) {
            return (
              <RepoItem
                key={item.id}
                ref={lastElementRef}
                isAdded={isAdded}
                canAdd
                item={item}
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
        <div className={Style.loading}>
          {loading && "Loading..."}
          {error && "Error"}
          {!loading && !error && items.length === 0 && (
            <div id="search-repo-place">Enter Repository name to search</div>
          )}
        </div>
      </ul>
    </>
  );
};

export default Search;
