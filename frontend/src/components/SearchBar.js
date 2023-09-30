import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    >
      <input
        type="text"
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #aaa",
        }}
        placeholder="Search Contacts..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
