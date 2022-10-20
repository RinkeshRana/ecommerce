import React from "react";

function SearchResult({ title }) {
  return (
    <div className="w-full bg-white my-2 p-4 rounded-md">
      <div>{title}</div>
    </div>
  );
}

export default SearchResult;
