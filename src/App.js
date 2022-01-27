import DictionarySearch from "./DictionarySearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row first-row">
          <div className="col">
            <h1>Lexicon</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <header className="App-header">
              What do you want to look for?
            </header>
          </div>
        </div>
        <DictionarySearch />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.behance.net/P-MOGA"
            target="_blank"
            rel="noreferrer"
            title="See my Behance portfolio"
          >
            Priscilla Morales
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/pris-moga/react-dictionary"
            target="_blank"
            rel="noreferrer"
            title="See the code"
          >
            open-sourced on GitHub.
          </a>{" "}
          Hosted on Netlify.
        </footer>
      </div>
    </div>
  );
}

export default App;
