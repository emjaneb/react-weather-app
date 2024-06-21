import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <footer>
        <a
          href="https://github.com/emjaneb/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by <b>Emma Bartley</b>
      </footer>
    </div>
  );
}

export default App;
