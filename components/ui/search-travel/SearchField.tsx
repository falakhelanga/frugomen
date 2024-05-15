import React from "react";
import Icon from "../icon/Icon";
import { twMerge } from "tailwind-merge";
import SearchResult from "./SearchResult";
import { Icons } from "@/types/icon-names";

interface SearchFieldProps {
  className?: string;
  onSearch: (searchValue: string) => void;
}

const SearchField = ({ className, onSearch }: SearchFieldProps) => {
  return (
    <div
      className={twMerge(
        "flex  border border-grayish-blue  px-2 rounded-full items-center",
        className
      )}
    >
      <input
        className="flex-1 bg-transparent py-2 outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Icon name={Icons["magnifying-glass"]} className={"fill-white"} />
    </div>
  );
};

export default SearchField;
