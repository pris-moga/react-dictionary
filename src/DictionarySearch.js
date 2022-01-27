import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexels(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // Dictionary API documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    //Pexels API
    let pexelsApiKey =
      "563492ad6f91700001000001457f7ff77bea4407a01998d6ad4c5e55";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexels);
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
              title="Click to write a word"
            />
            <input
              type="submit"
              value="Search"
              title="Click to search"
              className="search-button"
            />
          </form>
          <div className="hint">i.e. love, sun, coding, happy</div>
        </div>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
