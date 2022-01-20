import React, { useState } from "react";
import axios from "axios";

import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    // Dictionary API documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search the word..."
          onChange={updateKeyword}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
