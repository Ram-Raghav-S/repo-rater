import React, { useState } from "react";


const SearchBox = (props: {"placeholder": string}) => {
  const [repoURL, setRepoURL] = useState("");

  return (
      <div className="search-box">
        <input
        value={repoURL}
          type="text"
          onChange={(e) => {
            setRepoURL(e.target.value);
          }}
          className="search-bar"
          placeholder={props.placeholder}
        />
      </div>
  );
};

export default SearchBox;
