import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
    </div>
  );
}
