import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
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
      <div className="row mt-3">
        <div className="col">
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Search the word..."
              onChange={updateKeyword}
              className="me-2 search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <div className="hint">i.e. love, sun, coding, happy</div>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}
