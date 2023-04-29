import { debug } from "console";
import React, { useState } from "react";


const SearchBox = () => {
  const [repoURL, setRepoURL] = useState("");

  return (
      <div className="search-box">
        <input
        value={repoURL}
          type="text"
          onChange={(e) => {
            setRepoURL(e.target.value);
            console.log(repoURL);
          }}
          className="search-bar"
          placeholder="Enter Repository URL"
        />
      </div>
  );
};

export default SearchBox;
