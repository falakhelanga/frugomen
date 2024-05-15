import React, { useRef } from "react";
import SearchResultItem from "./SearchResultItem";
import { twMerge } from "tailwind-merge";

interface SearchResultProps {
  className?: string;
  results: Traveler[];
}

const SearchResult = ({ className, results }: SearchResultProps) => {
  return (
    <div
      className={twMerge(
        "bg-secondary-blue w-full px-8 py-4 absolute top-8",
        className
      )}
    >
      <span>Filter label</span>
      {results.map((item, idx) => (
        <SearchResultItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default SearchResult;
