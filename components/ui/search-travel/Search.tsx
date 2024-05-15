import React, { useRef, useState } from "react";
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";
import { twMerge } from "tailwind-merge";
import useClickOutside from "@/hooks/useClickOutSide";
import { useSearch } from "@/hooks/useSearch";
import { travelers } from "@/constants/travelers";

const searchKeys = ["name", "surname"];

interface SearchProps {
  className?: string;
}

const Search = ({ className }: SearchProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const { searchResults, setSearchResults } = useSearch<Traveler>(
    travelers || [],
    searchKeys,
    searchValue
  );
  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  ///// CLEAR RESULTS WHEN THE USER CLICK OUTSIDE OF THIS COMPONENT
  const closeResult = () => {
    setSearchResults([]);
  };
  useClickOutside<HTMLDivElement>(ref, closeResult);
  return (
    <div ref={ref} className={twMerge("relative", className)}>
      <SearchField onSearch={onSearch} />
      {searchResults.length > 0 && <SearchResult results={searchResults} />}
    </div>
  );
};

export default Search;
