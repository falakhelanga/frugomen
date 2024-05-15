import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";

/**
 * @param {string[]} searchKeys - List of keys that will be searched.
 */
export const useSearch = <T>(
  data: T[],
  searchKeys: string[],
  searchValue: string,
  delay = 1000
) => {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<T[]>([]);

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: searchKeys,
        includeScore: false,
      }),
    [data, searchKeys]
  );

  useEffect(() => {
    let timeout: any;

    if (searchValue.trim() === "") {
      timeout = setTimeout(() => {
        const results = fuse.search<T>(searchValue);
        setLoading(true);
        const formattedResults = results.map((item) => item.item);
        setSearchResults(formattedResults);
      }, delay);
    }
    if (searchValue.trim() !== "") {
      timeout = setTimeout(() => {
        const results = fuse.search<T>(searchValue);
        setLoading(false);
        const formattedResults = results.map((item) => item.item);
        setSearchResults(formattedResults);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, delay]);

  return { searchResults, loading, setSearchResults };
};
