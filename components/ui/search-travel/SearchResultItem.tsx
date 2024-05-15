import React from "react";

const SearchResultItem = ({ name, surname, location }: Traveler) => {
  return (
    <div className="flex gap-3 mb-2 md:cursor-pointer">
      <input type="checkbox" />
      <span>
        {name} {surname} {`(${location})`}
      </span>
    </div>
  );
};

export default SearchResultItem;

<span>Mark zuckerberg</span>;
