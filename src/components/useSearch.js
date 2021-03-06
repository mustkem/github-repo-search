import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function useSearch(query, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setItems([]);
  }, [query]);

  useEffect(() => {
    if (!query) {
      return false;
    }
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `${config.API_URL}search/repositories`,
      headers: {
        accept: "application/vnd.github.v3+json",
        authorization: `token ${localStorage.getItem("access_token_github")}`,
      },
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setItems((prevItem) => {
          return [...prevItem, ...res.data.items];
        });
        const totalPages = Math.ceil(res.data.total_count / 30);
        setHasMore(pageNumber < totalPages);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, items, hasMore };
}
